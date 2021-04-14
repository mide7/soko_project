import React from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import Header from "./Header";
import ShoppingArea from "./ShoppingArea";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <div className="App-header pl-2">
        <div className="w-100">
          <div className="mb-3 text-grey">
            <Link to="/">
              <h1 className="text-grey">LOGO</h1>
            </Link>
          </div>
          <Categories />
        </div>
      </div>
      <div className="App-main">
        <Header />

        <ShoppingArea>{props.children}</ShoppingArea>
      </div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
