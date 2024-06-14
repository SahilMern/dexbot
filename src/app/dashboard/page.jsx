import React from "react";
import style from "./dashboard.module.css";
import Link from "next/link";
const page = () => {
  return (
    <div className={style.dashboardContainer}>
      <h1>Welcomme to Uniswap Dex Bot</h1>
      <p>
        Uniswap Crypto tredaing bot for Buying and selling using diffrent Accounts, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dicta.
      </p>
      <Link href="/dashboard/dexbot">
        <button>CLICK HERE</button>
      </Link>
    </div>
  );
};

export default page;
