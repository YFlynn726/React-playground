import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate'
import Counter from './state/Counter'
import HelloWorld from './state-drills/HelloWorld'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter count={123} />
        <TheDate  name="TheDate"/>
        <h1>YOUR APPLICATION NAME!</h1>
        <Counter name="Counter"/>
        <div>Hello!</div>
        <Messages name="Messages" unread={0}/>
  <Messages name="Notifications" unread={10}/>
  <HelloWorld />
        </div>
        
        
    );
  }
}

export default App;