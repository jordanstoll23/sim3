import React, { Component } from 'react';
import './App.css';
import router from './router';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   {router}
      // </div>
    <div>
      <div className="App">
        <div className='splashScreen'>
          <div className='logo'></div>
          <div className="helo">Helo</div>
          <div><a className='text' href="http://localhost:3535/auth"><div className="loginButton"><div>Login / Register</div></div></a></div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
