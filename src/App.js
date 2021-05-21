import React, { useState } from 'react';
import Form from "./components/Form";
import logo from './logo.svg';
import './App.css';

function App() {
  const [ state, setState ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form />
    </div>
  );
}

export default App;
