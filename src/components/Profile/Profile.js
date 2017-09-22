import React, { Component } from 'react';
import './Profile.css';
import {connect} from 'react-redux';
import home from '../../assets/home.png';
import search from '../../assets/search.png';
import {setProfile} from '../../ducks/reducer'

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
        first: state.first,
        last: state.last,
        gender: state.gender,
        hair: state.hair,
        eye: state.eye,
        hobby: state.hobby,
        day: state.day,
        month: state.month,
        year: state.year,
    }
}

export default connect(mapStateToProps)(Profile)