"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "./parameters.module.css";
import { serverPath } from "@/app/constant/backend"; // Ensure this path is correct
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Page = () => {
  const [parameters, setParameters] = useState([]);

  useEffect(() => {
    const getParameters = async () => {
      try {
        const response = await axios.get(`${serverPath}/getAllparameters`);
        setParameters(response.data.parameters); // Adjusted to access nested parameters
      } catch (error) {
        // console.error("Fetch error:", error);
        toast.error("Error While getting parameters");
      }
    };

    getParameters();
  }, []);

  return (
    <div className={style.container}>
      {parameters.length > 0 ? (
        <table className={style.table}>
          <thead>
            <tr>
              <th>Time Range</th>
              <th>Dollar Range</th>
            </tr>
          </thead>
          <tbody>
            {parameters.map((param, index) => (
              <tr key={index}>
                <td>{param.firstTime} - {param.lastTime}</td>
                <td>{param.dollarStart} - {param.dollarEnd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
      <ToastContainer />
    </div>
  );
};

export default Page;
