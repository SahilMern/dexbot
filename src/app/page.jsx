"use client";
import { useEffect, useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import axios from "axios";
import { serverPath } from "./constant/backend";

const Page = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setAuth(false);
        return;
      }

      try {
        await axios.get(`${serverPath}/validate-token`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Token is valid
        setAuth(true);
      } catch (error) {
        // Token is invalid or expired
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        setAuth(false);
      }
    };

    checkTokenValidity();
  }, []);

  return (
    <div className={style.homeContainer}>
      <h1>DECNTRAWOOD UNISWAP </h1>
      <p>
      Crypto trading bots offer algorithmic (rule-based) trading of crypto assets in order to facilitate automated strategies. They are computer programs in which users define rules for buying and selling crypto.
      </p>

      <div className={style.buttonGroup}>
        {auth ? (
          <Link href="/dashboard">
            <button className={style.buttonDashboard}>Go TO DASHBOARD</button>
          </Link>
        ) : (
          <Link href="/login">
            <button className={style.buttonLogin}>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Page;
