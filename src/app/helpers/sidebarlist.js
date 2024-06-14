import { MdDashboard } from "react-icons/md";
import { MdSupervisedUserCircle } from "react-icons/md";
import { CiVolumeHigh } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const menuItem = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      {
        title: "dexbot",
        path: "/dashboard/dexbot",
        icon: <CiVolumeHigh />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Parameters",
        path: "/dashboard/parameters",
        icon: <MdOutlineProductionQuantityLimits />
        ,
      },
    ],
  },
  {
    title: "Services",
    list: [
      { title: "Services", path: "/Services", icon: <MdDashboard /> },
      {
        title: "Users",
        path: "/dashboard/user",
        icon: <MdSupervisedUserCircle />,
      },
    ],
  },
  // {
  //   title: "Authentication",
  //   list: [
  //     { title: "Authentication", path: "/Authentication", icon: <MdDashboard /> },
  //     {
  //       title: "Users",
  //       path: "/dashboard/user",
  //       icon: <MdSupervisedUserCircle />,
  //     },
  //   ],
  // },
];

module.exports = menuItem;


