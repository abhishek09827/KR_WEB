import "./App.css";
import Navbar from "../components/Navbar";
import About from "../components/About/About";
// import TextScreen from "../components/TextScreen/TextScreen";
import Footer from "../components/Footer/Footer";
// import CropPredict from "../components/models/CropPredict";

function App() {
  return (
    <>
      <Navbar />

      {/* <CropPredict /> */}
      <About></About>

      <Footer />
    </>
  );
}

export default App;
