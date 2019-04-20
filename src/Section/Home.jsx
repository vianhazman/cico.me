import React, { Component } from "react";
import hero from "../Assets/hero.gif";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="verticalCenter content col-md-8">
          <div>
            <h2>
              in a journey of enabling smart society through advancement in
              technology 🇮🇩
            </h2>
            <p>
              Hello! My name is Favian Kharisma Hazman. I'm studying Information
              Systems at University of Indonesia . Yes, i code.
            </p>
            <small>
              This website is still on progress. Will finish it on my spare
              times.
            </small>
          </div>
        </div>
        <div className="heroContainer col-md-4">
          <img className="hero" src={hero} />
        </div>
      </div>
    );
  }
}

export default Home;
