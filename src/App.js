import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Hotel from "./screens/hotel";
import Place from "./screens/place";
import Food from "./screens/food";
import Login from "./screens/login";
import Talk from "./screens/Talk";
import Signup from "./screens/Signup";
import Osaka from "./screens/Osaka";
import Osakasang from "./screens/place/Osakasang";
import Aveno from "./screens/place/Aveno";
import Umeda from "./screens/place/Umeda";
import Moeyomenske from "./screens/food/Moeyomenske";
import Heijoen from "./screens/food/Heijoen";
import Motomura from "./screens/food/Motomura";
import Art from "./screens/hotel/Art";
import Ivis from "./screens/hotel/Ivis";
import Yahmatoyah from "./screens/hotel/Yahmatoyah";
import NavBarElements from "./component/Navbar/NavBarElements";
import Carousel from "react-bootstrap/Carousel";
import Test from "./screens/Test";

function App() {
  return (
    <Router>
      <NavBarElements />
      <Carousel fade>
        <Carousel.Item>
          <img
            src={process.env.PUBLIC_URL + "/image/img1.jpg"}
            width="300"
            height="250"
            data-reactied="266"
            objective-fit="contain"
            className="d-block w-100"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>about Osaka</h3>
            <p>오사카를 소개합니다</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={process.env.PUBLIC_URL + "/image/img2.jpg"}
            width="300"
            height="250"
            data-reactied="266"
            objective-fit="contain"
            className="d-block w-100"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Osaka travel</h3>
            <p>오사카 관광명소를 소개합니다</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={process.env.PUBLIC_URL + "/image/img3.jpg"}
            width="300"
            height="250"
            data-reactied="266"
            className="d-block w-100"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Osaka festival</h3>
            <p>오사카의 축제를 소개합니다</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/place" element={<Place />} />
        <Route path="/food" element={<Food />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Osaka" element={<Osaka />} />
        <Route path="/Osakasang" element={<Osakasang />} />
        <Route path="/Aveno" element={<Aveno />} />
        <Route path="/Umeda" element={<Umeda />} />
        <Route path="/Heijoen" element={<Heijoen />} />
        <Route path="/Moeyomenske" element={<Moeyomenske />} />
        <Route path="/Heijoen" element={<Heijoen />} />
        <Route path="/Motomura" element={<Motomura />} />
        <Route path="/Art" element={<Art />} />
        <Route path="/Ivis" element={<Ivis />} />
        <Route path="/Yahmatoyah" element={<Yahmatoyah />} />
        <Route path="/talk" element={<Talk />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
