import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyComp from './components/MyComp';
import Arithmetic from './components/Arithmetic';
//import App1 from './app1'

class App extends React.Component {
  render (){
    return (
    <div className='App'>
     
      <Arithmetic></Arithmetic>
    </div>
    )
  }
}

export default App;
