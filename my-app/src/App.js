import './App.css';

import { Route, Routes } from "react-router-dom";

import Login from './component/Login';

import Home from './component/Home';
import RegistrationForm from "./component/RegistrationForm";
import Start from './component/Start';
import Form from './component/Form';
import Output from './component/Output';
function App() {
  return (

    <Routes>
        <Route exact path='/' element ={<Home/>}/>
        <Route path='Home' element={<Home/>}> </Route>
        <Route path='Login' element={<Login/>}> </Route>
        <Route path='Register' element={<RegistrationForm/>}> </Route>
      
                <Route path='Start' element={<Start/>}> </Route>
                <Route path='Form' element={<Form/>}> </Route>
                <Route path='Output' element={<Output/>}> </Route>
    

    
    </Routes>
  );
}

export default App;
