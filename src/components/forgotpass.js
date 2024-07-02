import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'; 
import "../components/css/login.css";

const ResetPassword = () => {
  
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 

  const auth = getAuth(); 


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent!');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner-text">
    <form onSubmit={handleSubmit}>
      <FontAwesomeIcon icon={faEye} style={{ color: "blue", width: "40px", height: "40px", marginLeft: "40%" }} />
      <strong>Forgot Password</strong>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </div>
      <br></br>
      {message && <p>{message}</p>}
    </form>
    </div>
    </div>
  );
};

export default ResetPassword;
