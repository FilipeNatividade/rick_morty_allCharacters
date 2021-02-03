import "./App.css";
import { Component } from "react";
import CharacterList from "./components/CharacterList";

class App extends Component {
  state = {
    characterList: [],
    nextUrl: "https://rickandmortyapi.com/api/character/",
    totalPersonagens: 0,
  };

  getCharacters = () => {
    const { characterList } = this.state;
    fetch(this.state.nextUrl)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          characterList: [...characterList, ...response.results],
          nextUrl: response.info.next,
          totalPersonagens: response.info.count,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount = () => {
    this.getCharacters(this.state.nextUrl);
  };

  componentDidUpdate = () => {
    this.state.nextUrl !== null && this.getCharacters();
  };

  render() {
    return (
      <div className="App">
        <CharacterList list={this.state.characterList}></CharacterList>
        <p>total de personagens carregados: {this.state.totalPersonagens}</p>
      </div>
    );
  }
}
export default App;
