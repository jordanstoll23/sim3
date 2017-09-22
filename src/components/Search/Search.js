import React, { Component } from 'react';
import './Search.css';
import {connect} from 'react-redux';

class Search extends Component {
    constructor(props){
        super(props)
        
    }

    render() {
        return (
            <div>
                Search
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        trevor: state.trevor
    }
}

export default connect(mapStateToProps)(Search)