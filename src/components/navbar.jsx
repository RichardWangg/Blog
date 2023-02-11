import React, { useState } from "react";
import {useContext} from 'react';
import { Link } from "react-router-dom";
import { HouseSimple } from "phosphor-react";
import { MagnifyingGlass } from "phosphor-react";
import "./navbar.css";
import { AuthContext } from "../../context/authContext";

export const Navbar = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="links">
        <div>
          <Link to="/">
            Home <HouseSimple size={32} />
          </Link>
        </div>
        <Link to="/search">
          <MagnifyingGlass size={32} />
        </Link>
        <div>
            {currentUser ? <span> Logout </span> : <Link to="/login"></Link>}
        </div>
        <div>
          <Link to= "/myaccount">
            <span> {currentUser?.username}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
