import React from 'react';
import {Router, Route, Routes, Link, ReactDom } from 'react-router-dom';
import './App.css';
import Suggestions from './pages/Suggestions';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Home';
import Dashboard from './pages/user/Dashboard';
import ForgotPasssword from './pages/Auth/ForgotPassword';
import PrivateRoute from './Components/Routes/Private';
import AdminRoute from './Components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/Admin/Products';
import UpdateProduct from './pages/Admin/UpdateProduct';

function App() {
  return(
      <>
        <Routes>
          <Route path="/Suggestions" element={<Suggestions />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPasssword />} />

          <Route path="/dashboard" element={<AdminRoute />}/>
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/admin/create-category" element={<CreateCategory />} />
            <Route path="/dashboard/admin/update-product" element={<UpdateProduct />} />
            <Route path="/dashboard/admin/products" element={<Products />} />
            <Route path="/dashboard/admin/create-product" element={<CreateProduct />} />
          

          <Route path="/dashboard" element={<PrivateRoute />} />
            <Route path="/dashboard/user" element={<Dashboard />} />
            <Route path="/dashboard/user/orders" element={<Orders />} />
            <Route path="/dashboard/user/profile" element={<Profile />} />

        </Routes> 
      </>
  );
}
export default App;