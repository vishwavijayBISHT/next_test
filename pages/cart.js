import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import cookie, { remove } from "js-cookie";
import { useState } from "react";
import Link from "next/link";
import StripeCheckout from "react-stripe-checkout";

const Cart = ({ error, p }) => {
  const [pr, setprod] = useState(p.products);
  const { token } = parseCookies();
  console.log(p);
  console.log(p.products.length);
  const bb = p.products;
  const router = useRouter();
  let price = 0;
  if (!token) {
    return (
      <div className="center-align">
        <h3>Pls Login to View Your Card</h3>
        <Link href="/login">
          <a>
            <button className="btn"> Login</button>
          </a>
        </Link>
      </div>
    );
  }
  const remove = async (pid) => {
    const res = await fetch(`http://localhost:3000/api/cart`, {
      method: "DELETE",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productid: pid,
      }),
    });
    const res2 = await res.json();
    setprod(res2);
    console.log(res2);
  };
  const CardItem = () => {
    return (
      <>
        {pr.map((item) => {
          price = price + item.quantity * item.prod.price;
          return (
            <div style={{ display: "flex", margin: "20px" }}>
              <img src={item.prod.mediaUrl} style={{ width: "30%" }}></img>
              <div style={{ marginLeft: "20px" }}>
                <h6>{item.prod.name}</h6>
                <h6>
                  {item.quantity}x{item.prod.price}
                </h6>
                <button
                  className="btn red"
                  onClick={() => remove(item.prod._id)}
                >
                  {" "}
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  if (error) {
    M.toast({ html: error, classes: "red" });
    cookie.remove("user");
    cookie.remove("token");
    router.push("/login");
  }

  const TotalPrice = () => {
    return (
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h5>Total Rs= {price}</h5>
        {pr.length != 0 && (
          <StripeCheckout
            name="my Store"
            amount={price * 100}
            image={pr.length > 0 ? p.products[0].prod.mediaUrl : ""}
            currency="INR"
            shippingAddress={true}
            billingAddress={true}
            zipCode={true}
            stripeKey="pk_test_51I5pIaKfgiJaPMqtjKDr5SXxPx0G3U5soquYFI399GsBN6G5x2QJ61jKYqYyvYCklMxbKIc1VHZCrDvXMpzg5Qdm00nekD9Pns"
            token={(paymentinfo) => handleCheckout(paymentinfo, token)}
          >
            <button className="btn">CheckOut</button>
          </StripeCheckout>
        )}
      </div>
    );
  };
  return (
    <div className="container">
      <CardItem />
      <TotalPrice />
    </div>
  );
};
const handleCheckout = async (paymentinfo, token) => {
  console.log(paymentinfo);
  console.log(token);
  const res = await fetch(`http://localhost:3000/api/payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      paymentinfo,
    }),
  });
  const res2 = await res.json();
  console.log(res2);
  M.toast({ html: res2.message, classes: "green " });
};
export async function getServerSideProps(ctx) {
  const { token } = parseCookies(ctx);
  if (!token) {
    return {
      props: { error: "pls Login" },
    };
  }
  const res = await fetch(`http://Kart@011_test_next.vercel.app/api/cart`, {
    headers: {
      Authorization: token,
    },
  });
  const res2 = await res.json();
  console.log("p===>" + res2);
  if (res2.error) {
    return {
      props: { error: res2.error },
    };
  }

  return {
    props: {
      p: res2,
    },
  };
}
export default Cart;
