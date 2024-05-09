import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-100">
      <div className="align-center navbar">
        <div className="navbar-start">
          <Link to="/" className="font-bold p-10 text-3xl">
            MyBook
          </Link>
        </div>
        <div className="gap-10">
          <li className="list-none 	">
            <Link className="font-medium text-2xl" to="/">
              Home
            </Link>
          </li>
          <li className="list-none	">
            <Link className="font-medium text-2xl" to="/about">
              About
            </Link>
          </li>
          <li className="list-none	">
            <Link className="font-medium text-2xl" to="/contact">
              Contact
            </Link>
          </li>
        </div>

        <div className="navbar-end">
          {" "}
          <button className=" btn btn-ghost p-10 font-medium text-2xl  ">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
