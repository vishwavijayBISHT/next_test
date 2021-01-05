import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const Singup = () => {
  const abcd = useRouter();
  const [name, setname] = useState("");
  const [email, setemial] = useState("");
  const [pass, setpass] = useState("");

  const handlesub = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        pass,
      }),
    });
    const res2 = await res.json();
    if (res2.error) {
      M.toast({ html: res2.error, classes: "red" });
    } else {
      M.toast({ html: res2.message, classes: "green" });
      abcd.push("/login");
    }
  };
  return (
    <div className="container center-align scard">
      <h3>Sign up</h3>
      <form className="container" onSubmit={(e) => handlesub(e)}>
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
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setemial(e.target.value);
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          value={pass}
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />

        <button className="btn waves-effect waves-light" type="submit">
          Signup
          <i className="material-icons right">forward</i>
        </button>
      </form>
      <Link href="/login">
        <a>
          <h5>Already have a account?</h5>
        </a>
      </Link>
    </div>
  );
};
export default Singup;
