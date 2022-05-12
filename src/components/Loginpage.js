import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";
const Loginpage = ({ login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submithandler = (e) => {
    e.preventDefault();
    login(details);
  };

  return (
    <form onSubmit={submithandler} className="loginapp">
      <div className="form-inner">
        <h3>Welcome back</h3>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="name"
            id="id"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
        </div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default Loginpage;
