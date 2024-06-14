"use client"
import Link from "next/link";
import React from "react";
import Style from "./menuLink.module.css"
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathName= usePathname();
  return (
    <Link href={item.path} className={`${Style.container} ${pathName=== item.path && Style.active}`}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
