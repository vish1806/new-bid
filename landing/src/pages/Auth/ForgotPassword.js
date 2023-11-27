import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - BidHUB"}>
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
              <label className="form-label" >Enter your E-mail</label>
              <input type="email" id="name" className="form-control" placeholder="Enter yout MailID" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="form-outline mb-4">
              <label className="form-label">New Password</label>
              <input type="password" id="email" className="form-control" placeholder="Enter your password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          </div>
          <div className="form-outline mb-4">
              <label className="form-label">Your country</label>
              <input type="text" id="phone" className="form-control" placeholder="Enter your country" value={answer} onChange={(e) => setAnswer(e.target.value)} required/>
          </div>
          <button type="submit" className="btn btn-primary btn-block fa-lg gradient-custom-2 mx-3">
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPasssword;