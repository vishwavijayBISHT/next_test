import Link from "next/link";

const Home = ({ products }) => {
  const productslist = products.map((product) => {
    return (
      <div className="card" key={product._id}>
        <div className="card-image">
          <img src={product.mediaUrl}></img>
          <span className="card-title"> {product.name}</span>
        </div>
        <div className="card-content">
          <p>RS {product.price}</p>
        </div>
        <div className="card-action">
          <Link href={"/product/[id]"} as={`/product/${product._id}`}>
            <a href="#">View</a>
          </Link>
        </div>
      </div>
    );
  });
  return <div className="rootcard">{productslist}</div>;
};

// export async function getStaticProps(context) {
//   const res = await fetch("http://localhost:3000/api/products");
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: { products: data },
//   };
// }
export async function getServerSideProps({ params }) {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  console.log(data);
  return {
    props: { products: data },
  };
}
export default Home;
