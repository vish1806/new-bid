import React,{useState}  from 'react'
import logo from './logo.jpg';
import Layout from '../../Components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from "axios";
import {useNavigate} from "react-router-dom";



const Register = () =>
{
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[password,setPassword] = useState("");
    const[answer,setAnswer] = useState("");
    const navigate= useNavigate();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res= await axios.post("http://localhost:8080/api/v1/auth/register",{name,email,phone,password,answer});
            if(res && res.data.success)
            {
                toast.success(res.data && res.data.message);
                navigate("/Login");
            }
            else
            {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error.message)
            toast.error("Something went wrong");
        }
    };
    return (
        <>
            <Layout title="Register - BidHub"> 
                <div className="d-flex justify-content-center align-items-center rounded-3 text-black">
                    <div className="d-flex align-items-center gradient-custom-2 w-50">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 className="mb-4">Welcome to BidHub, Your Premier Online Auction Platform!</h4>
                            <p className="small mb-0">At BidHub, our mission is to provide a seamless and enjoyable auction experience for both buyers and sellers. We are committed to creating a thriving marketplace where individuals and businesses can connect, trade, and discover unique treasures.</p>
                        </div>
                    </div>
                    <div className="mainpage mx-5 w-[100]">
                        <div className="text-center my-5">
                            <img className="w-50" src={logo} alt="React" />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-outline mb-4">
                                <label className="form-label" >Name</label>
                                <input type="text" id="name" className="form-control" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} required autoFocus/>
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label"> Email</label>
                                <input type="email" id="email" className="form-control" placeholder="email address" value={email} onChange={(e)=> setEmail(e.target.value)} required />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label">Phone Number</label>
                                <input type="text" id="phone" className="form-control" placeholder="Phone Number" value={phone} onChange={(e)=> setPhone(e.target.value)} required/>
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label">Password</label>
                                <input type="password" id="pass" className="form-control" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label">Answer</label>
                                <input type="text" id="answer" className="form-control" placeholder="your country" value={answer} onChange={(e)=> setAnswer(e.target.value)} required/>
                            </div>
                            <div className="text-center pt-1 mb-5 pb-1">
                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mx-3" type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Register;