import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Update from './components/Update';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Allrecords from './components/Allrecords';
import Register from './components/Register';
import { UsersContexts } from './components/userContext';

function App() {
  const heading = "Registration Page";

  return (
    <>
      <Router>
      <UsersContexts.Provider value="Update Panel">
      <Navbar></Navbar>
      
        <Routes>
       
          <Route path="/" element={<Home/>}></Route>
          <Route path="/register" element={<Register Title={heading}/>}></Route>
          <Route path="/allrecords" element={<Allrecords/>}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
         
        </Routes>
        </UsersContexts.Provider>
      </Router>
      
    </>
  );
}

export default App;
