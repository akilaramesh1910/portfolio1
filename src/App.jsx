import React from 'react';
import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  const [firstname,setFirstName] = useState('');
  const [lastname,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [msg,setMsg] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    console.log("fa");
  }
  return(
    <>
      <Navbar/>  
      <div className="container">
        <Hero/>
        <Skills/>
        <ContactMe
           firstname={firstname}
           setFirstName={setFirstName}
           lastname={lastname}
           setLastName={setLastName}
           email={email}
           setEmail={setEmail}
           msg={msg}
           setMsg={setMsg}
           handleSubmit={handleSubmit}
        />
      </div> 
      <Footer/>
    </>
  );
}

export default App;
