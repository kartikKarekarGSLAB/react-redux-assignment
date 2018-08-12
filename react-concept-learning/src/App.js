import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoLibrary from './components/VideoLibrary';
import { createStore } from 'redux';

const reducer = function(previousState,action) {
  // console.log('previousState : ',previousState.counter);
  console.log('ACTION : ',action);
  if (action.type === "INC") {
    return { counter : previousState.counter + Number(action.payload) };
  }
  if (action.type === "DEC") {
    return { counter : previousState.counter - Number(action.payload) };
  } 
  return { counter : 0 };
}

const store = createStore(reducer,{counter:0});

store.subscribe(() => {
  console.log('store chnaged : ',store.getState());
})

store.dispatch({type:"INC" , payload:1});
store.dispatch({type:"INC" , payload:1});
store.dispatch({type:"DEC" , payload:1});
store.dispatch({type:"INC" , payload:1});
store.dispatch({type:"INC" , payload:1});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <VideoLibrary />
      </div>
    );
  }
}

export default App;
