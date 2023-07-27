import React from 'react';
import { Header } from './Components/Header';
// import { Home } from './Components/Home';
import './App.css';
import TodoList from './Components/TodoList';


function App() {
  return (
    <div id='adas' className='custom'>
      <Header />
      {/* <br />
      <Home /> */}
      <br />
      <TodoList></TodoList>
    </div>
  );
}

export default App;
