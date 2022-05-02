/* import React from 'react';
//import { useState } from "react";
import ReactDOM from 'react-dom/client';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

//const myFirstElement =   <h1 className="myclass">Hello Sahil</h1>;
/*const x = 15;
let text = "";
if (x < 10) {
  text = "Hello";
}
else{
  text="World!";
}
const myText=<h1>{text}</h1>;



function Car(obj) {
  return <h2>I am a { obj.brand }!</h2>;
}

const myElement = <Car brand="Ford" />;
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(myFirstElement);
root.render(myElement);

function Car(obj){
  return <h2>I am a {obj.brand}!</h2>;
}
function Garage(){
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford"/>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);

 function Football(){
   const shoot=(a)=>{
     alert(a);

   }
   return(
     <button onClick={()=>shoot("Goal")}>Take the Shot</button>
   );
 }
 const root=ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Football/>);
 */
/*
function MissedGoal(){
  return <h1> Missed!</h1>
}
function MadeGoal(){
  return <h1> Goal!</h1>
}
function Goal(obj){
  const isGoal=obj.isGoal;
  if(isGoal){
    return <MadeGoal/>;
  }
  else
  {
    return <MissedGoal/>;
  }
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={true}/>);
*/

/*
function Car(props){
  return <li>I am a {props.brand}</li>;
}
function Garage(){
  const cars=['Ford','BMW','Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car)=><Car brand={car}/>)}
      </ul>
    </>
  );
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);
*/
// use state
/*
function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
*/
//Event handler
/*
function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}
*/
// Select Element
/*
function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
*/

