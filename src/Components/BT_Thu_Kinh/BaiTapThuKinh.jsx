import React, { Component } from "react";
import CacLoaiKinh from "./CacLoaiKinh";
import "./style.css";
import ThuKinh from "./ThuKinh";

export default class BaiTapThuKinh extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./img/glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./img/glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./img/glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./img/glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./img/glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./img/glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    kinhDangThu: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  doiKinh = (kinh) => {
    this.setState({
      kinhDangThu: kinh,
    });
  };
  render() {
    return (
      <div className="thuKinh  bg-back-opacity-4">
        <div className=" bg-back-opacity-4">
          <h3 className="text-center text-light pt-3 pb-3">Thử kính </h3>
          <div className="container">
            <div className="row">
              <div className="col-6 text-center">
                <ThuKinh kinhDangThu={this.state.kinhDangThu} />
              </div>
              <div className="col-6 text-center">
                <img
                  src="./img/glassesImage/model.jpg"
                  alt="model.jpg"
                  width={200}
                  height={250}
                />
              </div>
            </div>
            <div className="row bg-light mt-5">
              <CacLoaiKinh
                arrProduct={this.arrProduct}
                doiKinh={this.doiKinh}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
