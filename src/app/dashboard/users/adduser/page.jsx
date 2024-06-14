"use client";
import { useState } from "react";
import axios from 'axios';
import style from "./adduser.module.css";
import { serverPath } from "@/app/constant/backend";

const Page = () => {
  const [accountAddress, setAccountAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creating the payload for the API request
    const userData = {
      accountAddress: accountAddress,
      privateKey: privateKey,
    };

    try {
      // Sending the POST request to the API using axios
      const response = await axios.post(`${serverPath}/adduser`, userData, {
      // const response = await axios.post('http://localhost:2222/adduser', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // console.log("Success:", response.data);
      // Handle success, e.g., show a success message, clear the form, etc.
      alert("User added successfully!");
      // Optionally clear the form
      setAccountAddress("");
      setPrivateKey("");
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error adding the user.");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.inputBox}>
        <form onSubmit={handleSubmit}>
          <div className={style.inputGroup}>
            <label htmlFor="accountaddress" className={style.label}>Account Address</label>
            <input
              type="text"
              name="accountaddress"
              id="accountaddress"
              className={style.input}
              onChange={(e) => setAccountAddress(e.target.value)}
              value={accountAddress}
            />
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="privatekey" className={style.label}>Private Keys</label>
            <input
              type="text"
              name="privatekey"
              id="privatekey"
              className={style.input}
              onChange={(e) => setPrivateKey(e.target.value)}
              value={privateKey}
            />
          </div>
          <div className={style.buttonGroup}>
            <button type="submit" className={style.button}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
