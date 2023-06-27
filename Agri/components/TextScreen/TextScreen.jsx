import { useState, useEffect } from "react";
import Card from "../../reuseable/Card";
import Scrapper from "./Scrapper";
import "./TextScreen.css";
import Image from "../../assests/kissan1.jpeg";
import Map from "../Map/Map";

const TextScreen = () => {
  const [near, setNear] = useState([]);
  const [lat, setLat] = useState(28.6139);
  const [lng, setLng] = useState(77.209);

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
        setLat(near.latitude);
        setLng(near.longitude);
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
      <h3 className="text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut voluptate
        illo sunt dolor fuga unde incidunt quis, sapiente ratione. Sed,
        temporibus officia reprehenderit quasi accusantium est aut! Minima
        tempora repellendus quasi aliquam sunt veritatis, architecto aperiam
        praesentium distinctio voluptates neque beatae dolore officiis ratione
        facere fugit odio officia sequi expedita nulla illo magni est? Nobis,
        minima?
      </h3>
      <div className="text_screen">
        <div className="main">
          <Card>
            <h4>All the crop sale shops near you with just a click!</h4>
            <p>
              With a simple click, you can explore the crop retail markets near
              your farm. <br></br>
              This information can hep you get the best fit for you.
            </p>
          </Card>
          <img src={Image} alt="" />
        </div>
        <div className="button-class">
          <button onClick={mandiHandler} className="button_text">
            Near ME{" "}
          </button>
        </div>
        <Map latN={lat} lngN={lng} />
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
