import React from "react";
import {  Link, NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/carrer">Carrer</NavLink>
      </div>
      <div className="button flex gap-3">
        <img src={user} alt="" />
        <Link to='/auth/login' className="bg-[#403F3F] rounded-l hover:bg-[#2a2a2a] text-white px-6 py-2">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
