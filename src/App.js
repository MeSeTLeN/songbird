import React from "react";
import logo from "./logo.svg";
import "./App.css"

function App() {
  return (
    <div className="App">
        <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Navbar = () => {
  return (
		<div id="navbar" className="HeaderNavigation">
			<input type="checkbox" id="nav-toggle" className="nav-toggle"/>
			<div className="logo"><a href="#">Startup</a></div>
			<div className="nav">
				<div className="nav-item"><a href="#">Home</a></div>
				<div className="nav-item"><a href="#">Services</a></div>
				<div className="nav-item"><a href="#">About</a></div>
				<div className="nav-item"><a href="#">Works</a></div>
				<div className="nav-item"><a href="#">Blog</a></div>
				<div className="nav-item"><a href="#">Clients</a></div>
				<div className="nav-item"><a href="#">Contact</a></div>
			</div>
			<label for="nav-toggle" className="nav-toggle-label">
				<span></span>
			</label>
		</div>
  );
}

export default App;
