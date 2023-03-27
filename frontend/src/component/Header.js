import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../asset/logo2.png'
import {GrUser} from "react-icons/gr";
import {HiShoppingCart} from "react-icons/hi"
export default function Header() {
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10 ">
            <img src={logo} className="h-full" />
          </div>
        </Link>
        <div className="flex item-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-7 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-3xl text-slate-600">
            <HiShoppingCart />
          </div>
          <div className="text-2xl text-slate-600">
            <GrUser />
          </div>
        </div>
      </div>
      {/* mobile */}
    </header>
  );
}
