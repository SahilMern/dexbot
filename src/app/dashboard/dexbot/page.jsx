'use client'
import { useEffect, useState } from "react";
import style from "./dexbot.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../components/Loading/Loading";
import { io } from "socket.io-client";
import { serverPath, serverSocket } from "@/app/constant/backend";
const socket = io(serverSocket);
const Page = () => {
  const [isBotRunning, setIsBotRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //! Checking Bot status
  useEffect(() => {
    const getBotStatus = async () => {
      try {
        const response = await axios.get(`${serverPath}/checkBotStatus`);
        // console.log("Bot started successfully:", response.data);
        setIsBotRunning(response.data.status);
        setIsLoading(false);
      } catch (error) {
        // console.error("Error starting bot:", error);
        toast.error("Error While getting Bot status", {
          theme: "dark",
        });
      }
    };
    getBotStatus();
  }, []);

  //!START BOT
  const startbot = async () => {
    try {
      const response = await axios.post(`${serverPath}/startBot`);
      console.log("Bot started successfully:", response.data);
      if (response?.data.status === true) {
        setIsBotRunning(true);
        toast.success("Bot Stoped", {
          theme: "dark",
        });
      }
    } catch (error) {
      // console.error("Error starting action:", error);
      toast.error("Error while bot starting", {
        theme: "dark",
      });
    }
  };

  //!STOP BOT
  const stopBot = async () => {
    try {
      const response = await axios.post(`${serverPath}/stopBot`);
      console.log("Bot started successfully:", response.data);
      if (response?.data.status === true) {
        setIsBotRunning(false);
        toast.success("Bot Stoped", {
          theme: "dark",
        });
      }
    } catch (error) {
      // console.error("Error stopping action:", error);
      toast.error("Error While Stoping bot ", {
        theme: "dark",
      });
      
    }
  };

  useEffect(() => {
    // socket.on("connection", () => {
    //   console.log("connection successful");
    // });
    socket.on("deskError", (data) => {
      console.log(data.data, "DATA WHILE ERROR");
    });
  }, []);
  return (
    <div className={style.dexbotcontainer}>
      <div className={style.dexbotCard}>
        <img
          src="/uni.png"
          alt=""
        />
        <div className={style.content}>
          <h2>Uniswap Dex bot</h2>
          <p>
            Plese start bot to buy and sellin quickswap.
          </p>
          <div className={style.buttonGroup}>
            {isLoading ? (
              <Loading width={100} />
            ) : (
              <>
                <button
                  onClick={startbot}
                  className={`${style.cardbuttons} ${style.startButton}`}
                  disabled={isBotRunning}
                >
                  Start
                </button>
                <button
                  onClick={stopBot}
                  className={`${style.cardbuttons} ${style.stopButton}`}
                  disabled={!isBotRunning}
                >
                  Stop
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Page;
