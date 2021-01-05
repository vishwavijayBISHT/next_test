import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import cookie from "js-cookie";

const NavBar = () => {
  const router = useRouter();
  const cookieuser = parseCookies();
  console.log(cookieuser);
  const user = cookieuser.user ? JSON.parse(cookieuser.user) : "l";
  console.log(user);
  console.log(user.name);
  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else {
      ("");
    }
  }
  return (
    <nav>
      <div className="nav-wrapper  #1565c0 blue darken-3">
        <Link href="/">
          <a className="brand-logo left">KART</a>
        </Link>

        <ul id="nav-mobile" className="right ">
          <li className={isActive("/cart")}>
            <Link href="/cart">
              <a>Cart</a>
            </Link>
          </li>
          {user.role != "user" ||
            (undefined && (
              <li className={isActive("/create")}>
                <Link href="/create">
                  <a>Create</a>
                </Link>
              </li>
            ))}
          {user.name && (
            <>
              <li className={isActive("/account")}>
                <Link href="/account">
                  <a>Account</a>
                </Link>
              </li>
              <li>
                <button
                  className="btn red "
                  onClick={() => {
                    cookie.remove("token");
                    cookie.remove("user");
                    router.push("/login");
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
          {user == "l" && (
            <>
              <li className={isActive("/login")}>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
              <li className={isActive("/signup")}>
                <Link href="/signup">
                  <a>Sign Up</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
