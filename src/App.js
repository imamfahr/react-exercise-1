import React from 'react';
import logo from './logo.svg';
import Counter from './Component/counterFunc.jsx'
import './App.css';
import CounterClass from './Component/counterClass.jsx';
import ListProducts from './Component/ListProduct.jsx';

function App() {
  return (
    <div>
    <div className='counter-component-container'>
    <Counter />
    <CounterClass />
    </div>
    <ListProducts/>
    
    </div>
  );
}

export default App;
