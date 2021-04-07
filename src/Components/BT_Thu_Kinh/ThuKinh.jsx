import React, { Component } from "react";
import Kinh from "./Kinh";

export default class ThuKinh extends Component {
  render() {
    let kinh = this.props.kinhDangThu;
    return (
      <div className="model">
        <div style={{ position: "relative", display: "inline-flex" }}>
          <img
            src="./img/glassesImage/model.jpg"
            alt="model.jpg"
            width={200}
            height={250}
          />
          <Kinh
            kinh={kinh}
            style={{
              position: "absolute",
              top: "25%",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: "0.7",
            }}
          />
          <div
            className="text-left p-1"
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              fontSize: "0.8rem",
              background: "rgba(255, 166, 0, 0.4)",
            }}
          >
            <h3
              className="m-0 text-primary"
              style={{
                background: "none",
                fontSize: "1.5rem",
              }}
            >
              {kinh.name}
            </h3>
            <p className="m-0 text-light">{kinh.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
