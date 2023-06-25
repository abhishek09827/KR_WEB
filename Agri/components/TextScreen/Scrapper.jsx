import { useState, useEffect } from "react";
import Card from "../../reuseable/Card";

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
    <div>
      <div className="text-area">
        <Card>Click the button to get the soil centers near me.</Card>
      </div>
      <div className="button-class">
        <button onClick={scrapperHandler}>Detect</button>
      </div>
      {data && (
        <div>
          <h2>Scraped Data</h2>
          <ul>
            {data.map((item) => (
              <li key={item.name}>
                <div>Name: {item.name}</div>
                <div>Address: {item.address}</div>
                <img src={item.image_url} alt="Image" />
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Scrapper;
