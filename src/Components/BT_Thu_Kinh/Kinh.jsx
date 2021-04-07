import React, { Component } from "react";

export default class Kinh extends Component {
  render() {
    let { kinh } = this.props;
    return (
      <img
        src={kinh.url}
        alt={kinh.name}
        width={100}
        height={40}
        style={this.props.style}
      />
    );
  }
}
