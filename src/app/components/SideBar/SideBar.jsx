"use client"
import React, { useState, useEffect } from "react";
import Style from "./SideBar.module.css";
import menuItem from "@/app/helpers/sidebarlist";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import { MdLogout } from "react-icons/md";
import { RxCross1 } from "react-icons/rx"; // Import the cross icon
import axios from "axios"; // Import axios for making API calls
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Sidebar = ({ onClose }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Function to handle closing the sidebar
  const handleSidebarClose = () => {
    setShowSidebar(false);
    onClose(); // Call the onClose function passed from the parent (Navbar) component
  };

  // Function to handle logout
  const handleLogout = async () => {
    try {
      // Make an API call to your backend to log out
      // await axios.post('/api/logout'); // Replace with your actual logout API endpoint

      // Clear email and token from local storage
      localStorage.removeItem('email');
      localStorage.removeItem('token');

      // Optionally, redirect the user to the login page
      toast.success("Logout sucessfully", {
        theme: "colored"
        })
      window.location.href = '/login'; // Replace with your login route
    } catch (error) {
      // console.error("Logout failed", error);
      toast.error("Failed to logout")
    }
  };

  return (
    <div className={`${Style.container} ${showSidebar ? Style.show : ""}`}>
      <div className={Style.user}>
        <Image
          src="/decentrawood.png"
          alt=""
          width="40"
          height="40"
          className={Style.userImage}
          priority={true}
        />
        <div className={Style.userDetails}>
          <span className={Style.userName}>CRYPTO TREADING</span>
          <span className={Style.userTitle}>Administrator</span>
        </div>
        <RxCross1
          onClick={handleSidebarClose} // Call the handleSidebarClose function when the cross icon is clicked
          className={Style.closeIcon}
        />
      </div>
      <ul className={Style.list}>
        {menuItem.map((cat, key) => (
          <li key={key}>
            <span className={Style.cat}>{cat.title}</span>
            <ul>
              {cat.list.map((item, subKey) => (
                <MenuLink item={item} key={subKey} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button className={Style.logout} onClick={handleLogout}>
        <MdLogout /> Logout
      </button>
      <ToastContainer />
    </div>
  );
};

export default Sidebar;
