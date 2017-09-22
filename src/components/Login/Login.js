import React, {Component} from 'react';
import './Login.css';
import {connect} from 'react-redux';

class Login extends Component{
    render(){
        return(
            <div className="App">
                Login
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        jordan: state.jordan
    }
}

export default connect(mapStateToProps)(Login)