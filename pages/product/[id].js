import { router, useRouter } from "next/router";
import { useRef, useEffect } from "react";
import { parseCookies } from "nookies";
import { useState } from "react";

const ProductD = ({ product }) => {
  const router = useRouter();
  // if (router.isFallback) {
  //   return <h1>Loading</h1>;
  // }
  const [quan, setquan] = useState(1);
  const cookie = parseCookies();
  const user = cookie.user ? JSON.parse(cookie.user) : "";
  console.log(user);
  const modalRef = useRef(null);
  useEffect(() => {
    M.Modal.init(modalRef.current);
  }, []);
  const getModal = () => {
    return (
      <div id="modal1" className="modal" ref={modalRef}>
        <div className="modal-content">
          <h4>{product.name}</h4>
          <p>Are you sure you want to delete</p>
        </div>
        <div className="modal-footer">
          <button
            className="btn waves-effect waves-light #c62828 red darken-3"
            onClick={() => deleteproduct()}
          >
            Yes
          </button>
          <button className="btn waves-effect waves-light #c62828 blue darken-3">
            Cancel
          </button>
        </div>
      </div>
    );
  };
  const deleteproduct = async () => {
    const res = await fetch(
      `http://localhost:3000/api/productsdetail/${product._id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    console.log(data);

    router.push("/");
  };
  const AddtoCart = async () => {
    const res = await fetch(`http://localhost:3000/api/cart`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookie.token,
      },
      body: JSON.stringify({
        quantity: quan,
        productId: product._id,
      }),
    });
    const res2 = await res.json();
    console.log(res2);
  };
  return (
    <div className="container center-align">
      <h3>{product.name}</h3>
      <img src={product.mediaUrl} style={{ width: "30%" }} />
      <h5>Rs {product.price}</h5>
      <input
        type="number"
        style={{ width: "400px", margin: "10px" }}
        min="1"
        value={quan}
        placeholder="Qunatity"
        onChange={(e) => setquan(Number(e.target.value))}
      ></input>
      {user.name ? (
        <button
          className="btn waves-effect waves-light #1565c0 blue darken-3"
          onClick={() => AddtoCart()}
        >
          Add
          <i className="material-icons right">add</i>
        </button>
      ) : (
        <button
          className="btn waves-effect waves-light #1565c0 blue darken-3"
          onClick={() => {
            router.push("/login");
          }}
        >
          Login to Add
          <i className="material-icons right">add</i>
        </button>
      )}

      <p className="left-align">{product.description}</p>
      {user.role != "user" && (
        <button
          data-target="modal1"
          className="btn modal-trigger waves-effect waves-light #c62828 red darken-3"
        >
          Delete
          <i className="material-icons right">delete</i>
        </button>
      )}

      {getModal()}
    </div>
  );
};

export default ProductD;

// export async function getStaticProps({ params: { id } }) {
//   const res = await fetch(`http://localhost:3000/api/productsdetail/${id}`);
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: { product: data },
//   };
// }
// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: { id: "5fede764fcae372a07398c4a" },
//       },
//     ],
//     fallback: true,
//   };
// }

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `http://localhost:3000/api/productsdetail/${params.id}`
  );

  const data = await res.json();
  console.log(data);

  return {
    props: { product: data },
  };
}
