import React, {useState} from 'react';
import logo from './logo.jpg';
import './Login.css';
import axios from "axios";
import toast from 'react-hot-toast';
import Layout from '../../Components/Layout/Layout';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useAuth } from "../../context/auth";

const Login= () =>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        try 
        {
          const res = await axios.post("http://localhost:8080/api/v1/auth/login", { email, password});
          if (res && res.data.success) 
          {
            toast.success(res.data && res.data.message);
            setAuth({
                ...auth,
                user: res.data.user,
                token: res.data.token,
              });
            localStorage.setItem("auth", JSON.stringify(res.data));
            navigate("/");
          } 
          else 
          {
            toast.error(res.data.message);
          }
        } 
        catch (error) 
        {
          console.log(error.message);
          toast.error("Something went wrong");
          
        }
    };
    return (
        <>
            <Layout title="Login - BitHub">
                <div className=" d-flex justify-content-center align-items-center  rounded-3 text-black">
                    <div className=" p-md-5 mx-md-4">
                        <div className="text-center my-5">
                            <img src={logo} alt="React Image" width={200} />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example11"> Username</label>
                                <input type="email" id="form2Example11" className="form-control" placeholder="email address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example22">Password</label>
                                <input type="password" id="form2Example22" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            </div>
                            <div className="text-center pt-1 mb-5 pb-1">
                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mx-3" type="submit">Log in</button>
                                <a className="text-muted" href="#!" onClick={() => {navigate("/forgot-password")}}>Forgot password?</a>
                            </div>
                            <div className="d-flex align-items-center">
                                <p className="acc mx-2">Don't have an account?</p> 
                                <NavLink to="/Register" className="btn btn-outline-danger">Create new</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Login;
