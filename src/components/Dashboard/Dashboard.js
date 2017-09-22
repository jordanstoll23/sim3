import React, { Component } from 'react';
import './Dashboard.css';
import {connect} from 'react-redux';

class Dashboard extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div>
                Dashboard
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        jordan: state.jordan
    }
}

export default connect(mapStateToProps/*, {getUser}*/)(Dashboard)