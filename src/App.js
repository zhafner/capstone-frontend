import './style.css';
//import './login.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Login";
import PasswordReset from "./PasswordReset";
import CreateProfile from "./CreateProfile";
import Browse from "./Browse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
    
          <Route path="/PasswordReset" element={<PasswordReset/>}/>
          <Route path="/CreateProfile" element={<CreateProfile/>}/>
          <Route path="/Browse" element={<Browse/>}/>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
      <div className="streamline">STREAMLINE</div>
      </header> */}
    </div>
  );
}

export default App;
