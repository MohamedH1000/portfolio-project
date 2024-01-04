import React from "react";
import { Link } from "react-router-dom";
import "./css/register.css";
import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import axios from "../api/users";

// register page design
const Register = () => {
  const [event, setEvent] = useState(true);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [matchpwd, setMatchPwd] = useState("");
  const [success, setSuccess] = useState(false);

  let USER_REGEX = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
  let TEST_EMAIL = /\S+@\S+\.\S+/;
  let TEST_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleClick = () => {
    setEvent(!event);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      USER_REGEX.test(user) &&
      TEST_EMAIL.test(email) &&
      TEST_PASSWORD.test(pwd) &&
      (pwd === matchpwd) === true
    ) {
      const geturl = await axios.get(
        "/users",
        JSON.stringify({ name: user, email, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(geturl.data);
      const response = await axios.post(
        "/users",
        JSON.stringify({ name: user, email, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
        console.log(response.data)
        setSuccess("true");
      } else {
        console.log("enter the details carefully")
      }
    }
  return (
    <section className="register-section">
      {success? <>
      <form className="register-form">
      <h1 style={{color:'var(--text-color)'}}>Registeration done successfully</h1>
        </form>
        </> 
        :<form className="register-form" onSubmit={handleSubmit}>
        <div className="register-header">
          <h1>Register</h1>
        </div>
        <label for="uname" className="register-user-label">
          User name:
        </label>
        <div className={USER_REGEX.test(user) === true ? "true-icon" : "none"}>
          <FcCheckmark />
        </div>
        <input
          type="text"
          id="uname"
          placeholder="username"
          className="register-input"
          style={{ outline: "none" }}
          autoComplete="off"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <label for="uemail" className="register-user-label">
          Email
        </label>
        <div
          className={TEST_EMAIL.test(email) === true ? "true-email" : "none"}
        >
          <FcCheckmark />
        </div>
        <input
          type="email"
          id="uemail"
          placeholder="email"
          className="register-input"
          style={{ outline: "none" }}
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label for="password" className="register-password-label">
          Password:
        </label>
        <div className={TEST_PASSWORD.test(pwd) === true ? "true-pwd" : "none"}>
          <FcCheckmark />
        </div>
        <input
          type="password"
          id="password"
          placeholder="password"
          className="register-input"
          style={{ outline: "none" }}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          required
        />
        <label for="passwordconf" className="register-password-label">
          Confirm password
        </label>
        <div
          className={
            pwd === matchpwd && matchpwd.length > 5 ? "true-matchpwd" : "none"
          }
        >
          <FcCheckmark />
        </div>
        <input
          type="password"
          className="register-input"
          placeholder="confirm password"
          style={{ outline: "none" }}
          value={matchpwd}
          onChange={(e) => setMatchPwd(e.target.value)}
          required
        />
        <div className="register-show">
          <input type="checkbox" id="spass" onClick={handleClick} />
          &nbsp;&nbsp;
          <label for="spass" style={{ color: "black" }}>
            I agree to the{" "}
            <span
              style={{ color: "var(--text-color)" }}
              className="register-agree"
            >
              terms and condition
            </span>
          </label>
        </div>
        <button className="register-button" disabled={event}>
          Register
        </button>
        <div className="register-havnt">
          <p>Already have an account ?</p>
          <Link
            to="/eg-ar/login"
            style={{ textDecoration: "none", color: "var(--text-color)" }}
          >
            <p className="register-sign">Sign in</p>
          </Link>
        </div>
      </form>}
      
    </section>
  );
};

export default Register;
