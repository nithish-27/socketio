import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../App";

const Navbar = () => {
  // const [username, setUsername] = useState(null);
  const { userInfo, setUserInfo, username, setUsername } = useAppContext();
  console.log("[navname]", username);
  console.log("[navuserinfo]", userInfo);
  const logout = () => {
    fetch("http://localhost:3000/logout", {
      credentials: "include",
      method: "POST",
    }).then((response) => {
      if (response.ok) {
        setUserInfo(null);

        setUsername(null);
      }
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/profile", {
      credentials: "include",
    }).then((response) => {
      if (!response.ok) {
        // Token expired or other error
        setUserInfo(null);

        setUsername(null);
        return;
      }

      response.json().then((userInfo) => {
        console.log(userInfo);
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  return (
    <nav className="navbar" style={{ backgroundColor: "#f0f0f0", height: 50 }}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      {username && (
        <>
          <NavLink
            to="/createblog"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            create a new post
          </NavLink>
          <a style={{ marginRight: 20 }} onClick={logout}>
            logout
          </a>
        </>
      )}
      {!username && (
        <>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Register
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
