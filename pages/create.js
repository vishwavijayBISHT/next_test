import { useState } from "react";
import { useRouter } from "next/router";
import nookies from "nookies";
const Create = () => {
  const abc = useRouter();
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [media, setmedia] = useState("");
  const [des, setdes] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    const url = await imageUplaod();
    const res = await fetch(`http://localhost:3000/api/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        price,
        des,
        media: url,
      }),
    });
    const res2 = await res.json();
    if (res2.error) {
      M.toast({ html: "Pls add all the fields", classes: "red" });
    } else {
      M.toast({ html: "Product Added", classes: "green" });
      abc.push("/");
    }
  };
  const imageUplaod = async () => {
    const data = new FormData();
    data.append("file", media);
    data.append("upload_preset", "nextstore");
    data.append("cloud_name", "setu");
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/setu/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const res2 = await res.json();
    return res2.url;
  };
  return (
    <form className="container" onSubmit={(e) => handlesubmit(e)}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <input
        type="text"
        name="price"
        placeholder="price"
        value={price}
        onChange={(e) => {
          setprice(e.target.value);
        }}
      />

      <div className="file-field input-field">
        <div className="btn">
          <span>File</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setmedia(e.target.files[0]);
            }}
          />
        </div>
        <img
          className="responsive"
          src={media ? URL.createObjectURL(media) : ""}
        ></img>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <textarea
        id="textarea1"
        className="materialize-textarea"
        name="des"
        placeholder="description"
        value={des}
        onChange={(e) => {
          setdes(e.target.value);
        }}
      ></textarea>
      <button className="btn waves-effect waves-light" type="submit">
        Submit
        <i className="material-icons right">send</i>
      </button>
    </form>
  );
};

export async function getServerSideProps(ctx) {
  const cookie = nookies.get(ctx);

  const user = cookie.user ? JSON.parse(cookie.user) : "";
  console.log(user.role);

  if (user.role != "admin") {
    const { res } = ctx;
    res.writeHead(302, { Location: "/" });
    res.end();
  }
  return {
    props: {},
  };
}
export default Create;
