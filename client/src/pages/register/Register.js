import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const username = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Socialopath</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Socialopath.
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox">
            <input
              type="text"
              placeholder="Username"
              ref={username}
              required
              className="registerInput"
            />
            <input
              type="email"
              placeholder="Email"
              ref={email}
              required
              className="registerInput"
            />
            <input
              type="password"
              placeholder="Password"
              ref={password}
              required
              className="registerInput"
              minLength={6}
            />
            <input
              type="password"
              placeholder="Password Again"
              ref={passwordAgain}
              required
              className="registerInput"
              minLength={6}
            />
            <button className="registerButton" type="submit" onSubmit={handleClick}>Sign Up</button>
            <button className="registerRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
