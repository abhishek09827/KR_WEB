import { useState, useEffect } from "react";
import Card from "../../reuseable/Card";
import "./Scrapper.css";
import Image from "../../assests/kissan2.jpeg";
import Stock from "../../assests/stock_image.jpeg";

const Scrapper = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    scrapperHandler;
  }, []);

  const scrapperHandler = async () => {
    try {
      const response = await fetch("http://localhost:5000/scrapper");

      if (response.ok) {
        const d = await response.json();
        const data = JSON.parse(d);
        console.log(data);
        setData(data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="scrape">
      <div className="text-area">
        <Card>
          <h4>
            Get ready for an incredible adventure right from your fingertips!
          </h4>
          <p>
            With a simple click, you can explore the soil centers near your
            farm. <br></br>
            These centers hold valuable information to help you take care of
            your land and grow healthy crops.
          </p>{" "}
        </Card>
        <img src={Image} alt="" />
      </div>
      <div className="button-class">
        <button className="button" onClick={scrapperHandler}>
          <svg
            className="svgIcon"
            viewBox="0 0 512 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
          </svg>
          Detect
        </button>
      </div>
      {data && (
        <div className="scrape_data">
          <ul>
            {data.map((item) => (
              <li key={item.name}>
                <div className="scrape_name">
                  Name: <br /> {item.name}
                </div>
                <div className="scrape_content">
                  <div className="scrape_image">
                    {item.image_url.includes("data") ? (
                      <img src={Stock} alt="Stock Image" />
                    ) : (
                      <img src={item.image_url} alt="Image" />
                    )}
                  </div>
                  <div className="scrape_details">
                    <div className="scrape_add">Address: {item.address}</div>
                    <div className="scrape_link">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Scrapper;
