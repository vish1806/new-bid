import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";  
import logo from './logoo.jpg';  
import './Styles.css';
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import {Badge} from "antd";

const Header = () => {
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();
    const categories = useCategory();
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
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <SearchInput />
                    <ul className="navbar-nav mx-4">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Best Sellers</a>
                        </li>
                    </ul>
                    <li className="nav-item dropdown">
                        <Link
                        className="nav-link dropdown-toggle"
                        to={"/categories"}
                        data-bs-toggle="dropdown"
                        >
                        Categories
                        </Link>
                        <ul className="dropdown-menu">
                        <li>
                            <Link className="dropdown-item" to={"/categories"}>
                            All Categories
                            </Link>
                        </li>
                        {categories?.map((c) => (
                            <li>
                            <Link
                                className="dropdown-item"
                                to={`/category/${c.slug}`}
                            >
                                {c.name}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </li>
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
                        <Badge count={cart?.length} showZero>
                            <NavLink to="/cart" className="btn btn-outline-light mx-2">Cart</NavLink>
                        </Badge>
                    </li>
                </div>
            </nav>
        </>
    );
} 
export default Header;