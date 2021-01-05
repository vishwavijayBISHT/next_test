import { parseCookies } from "nookies";
import { useEffect, useRef } from "react";
import UserRoles from "../components/UserRoles";
const Account = ({ orders }) => {
  const orderCard = useRef(null);
  const cookie = parseCookies();
  const user = cookie.user ? JSON.parse(cookie.user) : "";
  console.log(orders);

  useEffect(() => {
    M.Collapsible.init(orderCard.current);
  }, []);
  const OrderHistory = () => {
    return (
      <ul className="collapsible" ref={orderCard}>
        {orders.map((item) => {
          console.log(item);
          return (
            <li key={item._id}>
              <div className="collapsible-header">
                <i className="material-icons">folder</i>
                {item.createdAt}
              </div>
              <div className="collapsible-body">
                <h5>Total ₹ {item.total}</h5>
                <h6 key={item._id}>
                  {item.prod.name} === X {item.quantity}
                </h6>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="container">
      <div
        className="center-align white-text"
        style={{
          marginTop: "10px",
          backgroundColor: "#1565c0",
          padding: "3px",
        }}
      >
        <h4>{user.name}</h4>
        <h4>{user.email}</h4>
      </div>
      <h3>Order History</h3>
      {orders.length == 0 ? (
        <div className="container">
          <h5>Your have no order History</h5>
        </div>
      ) : (
        <OrderHistory />
      )}
      {/* <UserRoles /> */}
      {user.role == "root" && <UserRoles />}
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { token } = parseCookies(ctx);
  if (!token) {
    const { res } = ctx;
    res.writeHead(302, { Location: "/login" });
    res.end();
  }

  const res = await fetch(`http://Kart@011_test_next.vercel.app/api/orders`, {
    headers: {
      Authorization: token,
    },
  });
  const res2 = await res.json();
  console.log("csdcsdsd===>>>>" + res2);

  return {
    props: { orders: res2 },
  };
}

export default Account;
