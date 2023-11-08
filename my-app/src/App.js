import './App.css';
import React, { useState } from 'react';
import { Route, Routes ,BrowserRouter, Switch} from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home';
import Start from './component/Start';
import Form from './component/FormComponents/Form';
import OutputHosts from './component/output/OutputHosts';
import OutputCVEList from './component/output/OutputCVEList';
import Signup from './component/Signup';

function App() {

  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (

    <Routes>
        <Route exact path='/' element ={<Home/>}/>
        <Route path='Home' element={<Home/>}> </Route>
        <Route path='Login' element={<Login/>}> </Route>
        <Route path='Signup' element={<Signup/>}> </Route>
                <Route path='Start' element={<Start/>}> </Route>
                <Route path='Form' element={<Form/>}> </Route>
                <Route path='OutputHosts' element={<OutputHosts/>}></Route>
                  <Route path='OutputCVEList' element={<OutputCVEList/>}></Route>
    </Routes>
  );
}

export default App;
