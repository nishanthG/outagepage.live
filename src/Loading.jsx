import React from "react";
import coding from "./assets/gif/coding.gif";
import "./CSS/loading.css";
import { counter } from "./JS/loading";

class Loading extends React.Component {
  componentDidMount() {
    counter();
  }
  render() {
    return (
      <div className="container outage">
        {/* <div className="outage-page"> */}
          <h1>I am working to get this online.</h1>
          <section className="timer">
            <div>
              <h2 className="days">Day</h2>
              <h3>days</h3>
            </div>
            <div>
              <h2 className="hours">Hours</h2>
              <h3>hours</h3>
            </div>
            <div>
              <h2 className="minutes">Minutes</h2>
              <h3>minutes</h3>
            </div>
            <div>
              <h2 className="seconds">Seconds</h2>
              <h3>seconds</h3>
            </div>
          </section>
        {/* </div> */}
        <img src={coding} alt="" />{" "}
      </div>
    );
  }
}

export default Loading;
