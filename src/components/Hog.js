import React, { Component } from "react";

class Hog extends Component {
  state = {
    show: false
  };

  getImage = () => {
    const imgName = this.props.name
      .toLowerCase()
      .split(" ")
      .join("_");
    const imgSrc = require(`../hog-imgs/${imgName}.jpg`);
    return imgSrc;
  };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { name, specialty, greased } = this.props;
    const weight = this.props[
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    ];
    const medal = this.props["highest medal achieved"];

    return (
      <li className="ui card eight wide column hog">
        <div className="image" onClick={this.handleClick}>
          <img src={this.getImage()} alt="hog" />
        </div>
        {this.state.show ? (
          <div className="content">
            <a className="header">{name}</a>
            <div className="description">
              <p>specialty: {specialty}</p>
              <p>{greased ? "Greased" : "Not Greased"}</p>
              <p>weight ratio: {weight}</p>
              <p>highest medal: {medal}</p>
            </div>
          </div>
        ) : null}
      </li>
    );
  }
}

export default Hog;
