import { Component } from "react";
import "./style.css";

class Character extends Component {
  render() {
    return (
      <div id="character">
        <img src={this.props.img}></img>
        <label id="charater">{this.props.name}</label>
      </div>
    );
  }
}
export default Character;
