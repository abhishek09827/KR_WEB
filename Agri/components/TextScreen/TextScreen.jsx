import { useState, useEffect } from "react";
import Card from "../../reuseable/Card";
import Scrapper from "./Scrapper";
import "./TextScreen.css";
import Image from "../../assests/kissan1.jpeg";

const TextScreen = () => {
  const [near, setNear] = useState([]);

  useEffect(() => {
    mandiHandler;
  }, []);

  const mandiHandler = async () => {
    try {
      const response = await fetch("http://localhost:5000/nearest");

      if (response.ok) {
        const near = await response.json();
        console.log(near);
        setNear(near);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Scrapper />
      <div className="text_screen">
        <div className="main">
          <Card>Click the button to get the crop markets near me.</Card>
          <img src={Image} alt="" />
        </div>
        <div className="button-class">
          <button onClick={mandiHandler}>Near ME </button>
        </div>
        {near && (
          <div className="line">
            <h2>{near.nearestCentre}</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default TextScreen;
