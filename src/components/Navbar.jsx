import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-100">
      <div className="align-center navbar">
        <div className="navbar-start">
          <Link to="/" className="font-bold text-3xl">
            MyBook
          </Link>
        </div>
        <div className="gap-4">
          <li className="list-none	">
            <Link className="" to="/">
              Home
            </Link>
          </li>
          <li className="list-none	">
            <Link className="" to="/about">
              About
            </Link>
          </li>
          <li className="list-none	">
            <Link className="" to="/contact">
              Contact
            </Link>
          </li>
        </div>

        <div className="navbar-end">
          {" "}
          <button className=" btn btn-ghost  ">Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
