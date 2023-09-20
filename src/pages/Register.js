import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("please enter all information");
      return;
    }

    const response = await fetch("http://localhost:3000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { "content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("user created successfully");
      navigate("/login");
    } else {
      alert("registration failed");
    }

    // setUser({ name: name, email: email });
    // navigate("/dashboard");
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h5>Register here</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          Register
        </button>
      </form>
    </section>
  );
};
export default Register;
