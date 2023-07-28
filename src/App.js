import {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Users} from "./users/Users";

function App() {
  const [value, setValue] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setValue({})
    }, 100)
  }, [])

  const handleToggleChange = () => {
    setToggle(prevState => !prevState);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 data-testid="h1-value">
          {inputValue}
        </h1>
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
        {value && (
            <p>Value</p>
        )}
        {toggle && (
            <div
                data-testid="toggle-elem"
            >
              Toggle Element
            </div>
        )}
        <button onClick={handleToggleChange}>
          Button
        </button>
        <input
          placeholder="input value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </header>
      <Users />
    </div>
  );
}

export default App;
