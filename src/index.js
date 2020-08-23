import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import Quiz from "./components/Quiz";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Quiz />
        {/* <header>
          <div className="logo_score_continer">
            <div className="logo">SongBird</div>
            <div className="score">score</div>
          </div>
          <div className="stages">
            <div className="active_stage">stage #1</div>
            <div>stage #2</div>
            <div>stage #3</div>
            <div>stage #4</div>
            <div>stage #5</div>
            <div>stage #6</div>
          </div>
        </header>
        <section>
          <div>Unknown bird</div>
          <div>variants</div>
          <div>variant decrp</div>
          <div>next stage</div>
        </section> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
