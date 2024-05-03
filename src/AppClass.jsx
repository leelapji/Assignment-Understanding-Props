import React, { Component } from "react";
import "./App.css";
import DataComponent from './components/DataComponent';

export default class AppClass extends Component {
  render() {
    const data = DataComponent();

    return (
      <div className="app">
        {data.map(item => (
          <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} />
        ))}
      </div>
    );
  }
}
