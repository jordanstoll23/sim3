import React, { Component } from 'react';
import './Profile.css';
import {connect} from 'react-redux';

class Profile extends Component {
    constructor(props){
        super(props)
        
    }

    render() {
        return (
            <div>
                Profile
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        jordan: state.jordan
    }
}

export default connect(mapStateToProps)(Profile)