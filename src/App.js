// import {useEffect, useState} from "react";
// import logo from './logo.svg';
// import './App.css';
// import {Users} from "./users/Users";
//
// function App() {
//   const [value, setValue] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//
//   useEffect(() => {
//     setTimeout(() => {
//       setValue({})
//     }, 100)
//   }, [])
//
//   const handleToggleChange = () => {
//     setToggle(prevState => !prevState);
//   }
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 data-testid="h1-value">
//           {inputValue}
//         </h1>
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
//         {value && (
//             <p>Value</p>
//         )}
//         {toggle && (
//             <div
//                 data-testid="toggle-elem"
//             >
//               Toggle Element
//             </div>
//         )}
//         <button onClick={handleToggleChange}>
//           Button
//         </button>
//         <input
//           placeholder="input value"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//       </header>
//       <Users />
//     </div>
//   );
// }

import {Link, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {ErrorPage} from "./pages/ErrorPage/ErrorPage";
import {Users} from "./users/Users";
import {User} from "./users/User";

const App = () => {
    return (
        <>
            <Link to="/" data-testid="main-link">Main Page</Link>
            <Link to="/about" data-testid="about-link">About Page</Link>
            <Link to="users" data-testid="users-link">Users</Link>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/users" element={<Users />}/>
                <Route path="/users/:id" element={<User />}/>
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </>
    )
}

export default App;
