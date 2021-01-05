import { useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import Link from "next/link";
const Login = () => {
  const a = useRouter();
  // const [name, setname] = useState("");
  const [email, setemial] = useState("");
  const [pass, setpass] = useState("");
  const onsubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        pass,
      }),
    });
    const res2 = await res.json();
    if (res2.error) {
      M.toast({ html: res2.error, classes: "red" });
    } else {
      cookie.set("token", res2.token);
      cookie.set("user", res2.user);

      a.push("/account");
    }
  };
  return (
    <div className="container center-align scard">
      <h3>Log in</h3>
      <form className="container" onSubmit={(e) => onsubmit(e)}>
        {/* <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        /> */}
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setemial(e.target.value);
          }}
        />

        <input
          type="password"
          name="price"
          placeholder="password"
          value={pass}
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />

        <button className="btn waves-effect waves-light" type="submit">
          Login
          <i className="material-icons right">forward</i>
        </button>
      </form>
      <Link href="/signup">
        <a>
          <h5>Don't have a account ?</h5>
        </a>
      </Link>
    </div>
  );
};
export default Login;
