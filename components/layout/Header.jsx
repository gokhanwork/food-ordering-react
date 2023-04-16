import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "../ui/Search";


const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  return (
    <div className="h-[5.5rem] bg-secondary">
      <div
        className="container mx-auto text-white flex justify-between
      items-center h-full"
      >
        <Logo />
        <nav className="sm:static absolute top-0 left-0 grid place-content-center h-full w-full
        sm:text-white text-black">
          <ul className="flex gap-x-2 sm:row flex-col">
            <li
              className="px-[0.3125rem] py-[0.625rem] uppercase 
          hover:text-primary cursor-pointer"
            >
              <a href="">Home</a>
            </li>
            <li
              className="px-[0.3125rem] py-[0.625rem] uppercase 
          hover:text-primary cursor-pointer"
            >
              <a href="">Menu</a>
            </li>
            <li
              className="px-[0.3125rem] py-[0.625rem] uppercase 
          hover:text-primary cursor-pointer"
            >
              <a href="">About</a>
            </li>
            <li
              className="px-[0.3125rem] py-[0.625rem] uppercase 
          hover:text-primary cursor-pointer"
            >
              <a href="">Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary transition-all" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </a>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="#" className="md:inline-block hidden">
            <button className="btn-primary">Online Order</button>
          </a>
          <button className="hover:text-primary transition-all md:hidden">
            <GiHamburgerMenu className="text-xl"/>
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
