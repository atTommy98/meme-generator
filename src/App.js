import "./App.css";
import Header from "./components/Header/index";
import Meme from "./components/Meme/index";

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <Header></Header>
        <Meme></Meme>
      </div>
    </div>
  );
}

export default App;
