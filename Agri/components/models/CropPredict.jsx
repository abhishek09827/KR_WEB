import { useState } from "react";
import "./CropPredict.css";
import cropData from "../../data/crop_data.js";

const CropPredict = () => {
  const [N, setN] = useState("");
  const [input_val, setInputVal] = useState("");
  const [P, setP] = useState("");
  const [Temperature, setTemperature] = useState("");
  const [Humidity, setHumidity] = useState("");
  const [pH, setPH] = useState("");
  const [Rainfall, setRainfall] = useState("");
  const [predictionText, setPredictionText] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "N":
        setN(value);
        break;
      case "input_val":
        setInputVal(value);
        break;
      case "P":
        setP(value);
        break;
      case "Temperature":
        setTemperature(value);
        break;
      case "Humidity":
        setHumidity(value);
        break;
      case "pH":
        setPH(value);
        break;
      case "Rainfall":
        setRainfall(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = {
      N,
      input_val,
      P,
      Temperature,
      Humidity,
      pH,
      Rainfall,
    };

    console.log("Request Data:", requestData);

    fetch("http://localhost:5000/predict", {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPredictionText(data.pred);
        console.log(data);
        console.log(data.pred);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const getCropImage = (cropName) => {
    const crop = cropData.find((crop) => crop.name == cropName);
    console.log(crop);
    return crop ? crop.imagePath : "";
  };

  return (
    <div className="login">
      <h1>Crop Prediction</h1>

      <form onSubmit={handleSubmit}>
        <label>N</label>
        <input
          type="text"
          name="N"
          value={N}
          onChange={handleChange}
          placeholder="N"
        />
        <label>P</label>
        <input
          type="text"
          name="input_val"
          value={input_val}
          onChange={handleChange}
          placeholder="P"
        />
        <label>K</label>
        <input
          type="text"
          name="P"
          value={P}
          onChange={handleChange}
          placeholder="K"
        />
        <label>Temperature</label>
        <input
          type="text"
          name="Temperature"
          value={Temperature}
          onChange={handleChange}
          placeholder="Temperature"
        />
        <label>Humidity</label>
        <input
          type="text"
          name="Humidity"
          value={Humidity}
          onChange={handleChange}
          placeholder="Humidity"
        />
        <label>pH</label>
        <input
          type="text"
          name="pH"
          value={pH}
          onChange={handleChange}
          placeholder="pH"
        />
        <label>Rainfall</label>
        <input
          type="text"
          name="Rainfall"
          value={Rainfall}
          onChange={handleChange}
          placeholder="Rainfall"
        />

        <button type="submit" className="btn btn-primary btn-block btn-large">
          Predict
        </button>
      </form>

      {predictionText && <div className="pred_text">{predictionText}</div>}

      {predictionText && (
        <img
          src={getCropImage(predictionText)}
          alt="Crop"
          className="crop-image"
        />
      )}
    </div>
  );
};

export default CropPredict;
