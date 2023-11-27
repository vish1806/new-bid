import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";  
import logo from './logoo.jpg';  
import './Styles.css';
    
const Header = () => {
    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
      setAuth({
        ...auth,
        user: null,
        token: "",
      });
      localStorage.removeItem("auth");
      toast.success("Logout Successfully");
    };  
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary flex justify-content-between navbar-shadow">
                <div className="navbar navbar-light bg-light" id="navbarNavDropdown">
                    <a className="navbar-brand mx-2" href="/">
                        <img src={logo} alt="React" width="80" height="60"  />
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Products</a>
                        </li>
                    </ul>
                </div>
                <div className='search-input'>
                    <form className="d-flex w-100 " role="search">
                        <input className="form-control mx-2 w-100" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Enter</button>
                    </form>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                {!auth.user ? (
                <>
                    <li className="logsign">
                        <NavLink to="/Register" className="btn btn-outline-light mx-2">Register</NavLink>
                    </li>
                    <li className="logsign">
                        <NavLink to="/login" className="btn btn-outline-light mx-2">Login</NavLink>
                    </li>
                </>
                ) : (
                <>
                    <li className="btn btn-outline-light dropdown mx-2" id="userauth">
                        <NavLink className="nav-link dropdown-toggle" id="nav-linkk" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{auth?.user?.name} </NavLink>
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink to={`/dashboard/${ auth?.user?.role === 1 ? "admin" : "user"}`}className="btn btn-outline-light"> Dashboard </NavLink>
                            </li>
                            <li className="logsign">
                                <NavLink onClick={handleLogout}to="/login" className="btn btn-outline-light"> Logout </NavLink>
                            </li>
                       </ul>
                    </li>
                </>
                )}
                <li className="cart">
                    <NavLink to="/cart" className="btn btn-outline-light mx-2">Cart</NavLink>
                </li>
                </div>
            </nav>
        </>
    );
} 
export default Header;