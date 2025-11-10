import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => (
    <>
        <NavBar/>

  <div className="home-page">
    <div className="home-container">
      <h1>Welcome to InfoHub</h1>

      <p className="home-text">
        InfoHub is your everyday companion for weather updates, currency conversion,
        and motivational quotes — all in one place.
      </p>

      <div className="feature-images">
        <Link to="/weather" className="image-box">
          <img src="https://tse2.mm.bing.net/th/id/OIP.NEgCdeNDoFA5XHRiZKjS8wHaHa?pid=Api&P=0&h=180" alt="Weather"/>
          <button className="btn btn-info">Weather</button>
        </Link>

        <Link to="/currency-converter" className="image-box">
          <img src="https://tse1.mm.bing.net/th/id/OIP.UKEuMwSysA-hwu-2XpAXNQHaHa?pid=Api&P=0&h=180" alt="Currency"/>
          <button className="btn btn-info">Currency</button>
        </Link>

        <Link to="/quotes" className="image-box">
          <img src="https://tse3.mm.bing.net/th/id/OIP.IeS6ywYMekXNHZolCpfdcgHaH0?pid=Api&P=0&h=180" alt="Quotes"/>
          <button className="btn btn-info">Quotes</button>
        </Link>
      </div>
    </div>
  </div>
  </>
)

export default Home
