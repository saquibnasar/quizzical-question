import React from "react";
import { Link } from "react-router-dom";
import blob1 from "../image/blob1.png";
import blob2 from "../image/blob2.png";
export default function Home(props) {
  return (
    <>
      <div className="container">
        <img src={blob1} alt="" className="blob1" />
        <img src={blob2} alt="" className="blob2" />
        <section className="Home">
          <div className="text-center">
            <h1 className="home-title">Quizzical</h1>
            <p className="fw-400">Some description if needed</p>
            <button type="button" className="btn-primary btn">
              <Link to="/quiz">Start quiz</Link>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
