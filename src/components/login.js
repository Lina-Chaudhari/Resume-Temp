import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "./signInWIthGoogle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import "../components/css/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner-text">
        <form onSubmit={handleSubmit}>
          <div className="form-group text-center">
            <FontAwesomeIcon icon={faSignInAlt} style={{color: "blue", width: "40px", height: "40px"}}/>
            <strong style={{textAlign:"center"}}>Welcome!</strong>
            <span>Sign in to your account</span>
          </div>
          
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            New user? <a href="/register">Register Here</a>
          </p>
          <p className="forgot-password text-right">
            <a href="/forgotpass">Forgot Password?</a>
          </p>
          <SignInwithGoogle/>
        </form>
      </div>
    </div>
  );
}

export default Login;
