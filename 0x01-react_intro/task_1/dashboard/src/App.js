import logo from "./holberton-logo.jpg";
import './App.css';
import { getFullYear, getFooterCopy } from  "./utils";

function App() {
  return (
    <div className="App">
      <div> 
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        </header>
      </div>
      <div>
        <body className="App-body">
        <p>Login to access the full dashboard</p>
        </body>
      </div>
      <div>
        <footer className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
        </footer>
      </div>
    </div>
  );
}

export default App;