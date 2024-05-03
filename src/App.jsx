import React from 'react';
import './App.css';
import DataComponent from './components/DataComponent';

function App() {
  const data = DataComponent();

  return (
    <div className="app">
      {data.map(item => (
        <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} />
      ))}
    </div>
  );
}

export default App;

