import React, {Component} from 'react';
import './Login.css';
import {connect} from 'react-redux';
import logo from './../../assets/logo.png';

class Login extends Component{
    render(){
        return(
            <div className="App1">
            <div className='splashScreen'>
        <img src={logo} alt={logo} className="Auth__logo_img"/>
          <div className="helo">Helo</div>
          <div><a className='text' href="http://localhost:3535/auth"><div className="loginButton"><div>Login / Register</div></div></a></div>
        </div>
      </div>
            
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login)


