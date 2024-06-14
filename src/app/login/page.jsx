"use client";
import { useEffect, useState } from "react";
import style from "./login.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serverPath } from "../constant/backend";
const Page = () => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      // Sending the POST request to the API using axios
      const response = await axios.post(
        `${serverPath}/login`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // If the request is successful, store the token in local storage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.email);

      // console.log("Success:", response);
      toast.success("Login sucessfully", {
        theme: "colored"
      })
      setTimeout(() => {
        
      }, 1000);
      router.push("/dashboard")
    } catch (error) {
      // console.error("Error:", error.response.data.message);
      toast.error(error.response.data.message, {
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token"); // Check if user is already logged in 
    const userId = localStorage.getItem("userId") //(token exists in local storage)
    if (token) {  // If token exists, check its validity
      console.log(token, "Token");
      checkTokenValidity(token);
    }
  }, []); // Run only once on component mount

  const checkTokenValidity = async (token) => {
    try {
      await axios.get(`${serverPath}/validate-token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (error) {
      // console.error("Error:", error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || "An error occurred", {
        theme: "dark",
      });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.cardBox}>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.inputGroup}>
            <label htmlFor="email" className={style.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={style.input}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="password" className={style.label}>
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={style.input}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className={style.buttonGroup}>
            <button type="submit" className={style.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Page;
