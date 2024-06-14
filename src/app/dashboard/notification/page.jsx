"use client";
import { useEffect, useState } from "react";
import style from "./notification.module.css";
import axios from "axios";
import { serverPath } from "@/app/constant/backend";

const Page = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getAllNotifications = async () => {
      try {
        const response = await axios.get(`${serverPath}/notification`);
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    getAllNotifications();
  }, []);

  const handleDeleteAll = async () => {
    try {
      await axios.delete(`${serverPath}/notification`);
      setNotifications([]); // Clear the notifications from the state
    } catch (error) {
      console.error("Error deleting notifications:", error);
    }
  };

  return (
    <div className={style.container}>
      <button className={`${style.button} ${style.seenAll}`}>Seen All</button>
      <button
        className={`${style.button} ${style.deleteAll}`}
        onClick={handleDeleteAll}
      >
        Delete All
      </button>

      <table className={style.table}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>User ID</th>
            <th>Account Address</th>
            <th>Error Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <tr key={index}>
                <td data-label="Sr No">{index + 1}</td>
                <td data-label="User ID">{notification.userId}</td>
                <td data-label="Account Address">{notification.accountAddress}</td>
                <td data-label="Error Action">
                  {notification.errorAction === "buy" ? (
                    <button className={style.buy}>Buy</button>
                  ) : (
                    <button className={style.sell}>Sell</button>
                  )}
                </td>
                <td data-label="Status">{notification.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No notifications found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Page;