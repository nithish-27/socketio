import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../App";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { setUserInfo, setUsername } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !email) {
      alert("please enter all information");
      return;
    }
    const response = await fetch("http://localhost:3000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "content-Type": "application/json" },
      credentials: "include",
    });

    console.log(response);
    if (response.ok) {
      response.json().then((userInfo) => {
        console.log("[login]", userInfo);
        setUserInfo(userInfo);
        setUsername(userInfo.name);
        navigate("/");
      });
    } else {
      alert("email or password is wrong");
    }
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h5>login</h5>

        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          login
        </button>
      </form>
    </section>
  );
};
export default Login;
