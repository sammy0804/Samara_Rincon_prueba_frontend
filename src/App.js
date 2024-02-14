// App.js
import React from 'react';
import Navbar from './components/header/Header'; 
import Slider from './components/slider/Slider';
import Form from './components/form/Form';
import Footer from './components/footer/Footer'
import cardData from './data/CardData'; // Data
import './App.css'; // estilos globales

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider cards={cardData} />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

