import React, { Component } from "react";
import Kinh from "./Kinh";

export default class CacLoaiKinh extends Component {
  renderAllKinh = () => {
    let { arrProduct, doiKinh } = this.props;
    return arrProduct.map((kinh, index) => (
      <div className="col-4 col-lg-2 text-center p-3" key={index}>
        <button className="btn" onClick={() => doiKinh(kinh)}>
          <Kinh kinh={kinh} />
        </button>
      </div>
    ));
  };
  render() {
    return <>{this.renderAllKinh()}</>;
  }
}
