import React from 'react';
import logo from './logo.svg';
import Counter from './Component/counterFunc'
import './App.css';
import CounterClass from './Component/counterClass';
import ListProducts from './Component/ListProduct';

function App() {
  return (
    <div>
    <Counter />
    <CounterClass />
    <ListProducts/>
    </div>
  );
}

export default App;
