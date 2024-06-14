"use client"
import React, { useContext, useEffect, useState } from "react";
import Style from "./navbar.module.css";
import { MdOutlineChat, MdSearch } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Sidebar from "../../SideBar/SideBar"; // Import Sidebar component
import { ErrorContext } from "@/app/context/errorContext";

const Navbar = () => {
  const pathName = usePathname();
  const { errorCount,setErrorCount  } = useContext(ErrorContext);
  const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   setErrorCount(50)
  // },[])
  return (
    <>
      <div className={Style.container}>
        <Link href="/dashboard">

        <img src="/decentrawood.png" className={Style.navbarImage}/>
        </Link>
        <div className={Style.title}>{pathName.split("/").pop()}</div>
        <div className={Style.menu}>
          {/* <div className={Style.search}>
            <MdSearch />
            <input
              type="search"
              name=""
              id=""
              placeholder="Not Working ..."
              className={Style.input}
            />
          </div> */}

          <div className={Style.icons}>
            <Link href="/dashboard/notification">
              <div className={Style.notificationDiv}>
                <MdOutlineChat className={Style.notificationMainIcon} />
                {/* <span>{errorCount}</span> */}
                {/* <span></span> */}
              </div>
            </Link>
            <div className={Style.responsiveIcons}>
              <FaBars
                onClick={() => setToggle(!toggle)}
                className={Style.responsiveIcon}
              />
            </div>
          </div>
        </div>
      </div>
      {!toggle && (
        <div className={Style.sidebarOverlay}>
          {/* Pass onClose prop to Sidebar component */}
          <Sidebar onClose={() => setToggle(true)} />
        </div>
      )}
    </>
  );
};

export default Navbar;
