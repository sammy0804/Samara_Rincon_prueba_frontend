// App.js
import React from 'react';
import Navbar from './components/Header/Header'; 
import Slider from './components/slider/slider';
import './App.css'; // Tus estilos globales

const cardData = [
  { img: '', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu consectetur mi. Sed nunc enim, facilisis et rhoncus id, rutrum id turpis. Ut nec gravida dui, quis placerat massa. Aenean vitae nibh eu neque finibus luctus.' },
  { img: '', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu consectetur mi. Sed nunc enim, facilisis et rhoncus id, rutrum id turpis. Ut nec gravida dui, quis placerat massa. Aenean vitae nibh eu neque finibus luctus.' },
  { img: '', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu consectetur mi. Sed nunc enim, facilisis et rhoncus id, rutrum id turpis. Ut nec gravida dui, quis placerat massa. Aenean vitae nibh eu neque finibus luctus.' },
  { img: '', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu consectetur mi. Sed nunc enim, facilisis et rhoncus id, rutrum id turpis. Ut nec gravida dui, quis placerat massa. Aenean vitae nibh eu neque finibus luctus.' },
  { img: '', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu consectetur mi. Sed nunc enim, facilisis et rhoncus id, rutrum id turpis. Ut nec gravida dui, quis placerat massa. Aenean vitae nibh eu neque finibus luctus.' },
  { img: '', title: 'Lorem Ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu consectetur mi. Sed nunc enim, facilisis et rhoncus id, rutrum id turpis. Ut nec gravida dui, quis placerat massa. Aenean vitae nibh eu neque finibus luctus.' },
  // ... more cards
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider cards={cardData} />
    </div>
  );
}

export default App;

