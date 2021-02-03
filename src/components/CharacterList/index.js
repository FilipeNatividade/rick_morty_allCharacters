import { Component } from "react";
import Character from "../Character";
import "./style.css";

class CharacterList extends Component {
  render() {
    const { name, image } = this.props.list;

    return (
      <div id="divImg">
        <h1>personagens</h1>
        <div id="divCharacter">
          {this.props.list.map((crr, idx) => (
            <Character key={idx} name={crr.name} img={crr.image}></Character>
          ))}
        </div>
      </div>
    );
  }
}
export default CharacterList;
