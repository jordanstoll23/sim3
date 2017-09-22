import React, { Component } from 'react';
import './Search.css';
import {connect} from 'react-redux';
import home from "../../assets/home.png";
import search from"../../assets/search.png";
import robohash from "../../assets/robohash.png";
import {Link} from 'react-router-dom';

class Search extends Component {
    constructor(props){
        super(props)
        
    }

    render() {
        return (
            <div className='DashHome'>
                <div className="HeaderParent">
                    <div className="HeaderChild">
                        <div className="Child1">
                            <span className="Header_title">Helo</span>
                            <a href="/"><img src={home} className="Header_home_img"/></a>
                            <Link to="/search"><img src={search} className="Header_search_img"/></Link>
                        </div>
                        <div className="Child2">
                            <span className="Header_page">Search</span>
                        </div>
                        <div className="Child3">
                        <a href='http://localhost:3535/auth/logout'><span className="Header_logout">Logout</span></a>
                            </div>
                    </div>
                </div>
                <div className="Dashboard_parent">
                    <div className="Dash_child_conatiner">
                        <div className="Dash_child_top">
                            <div className="User_container">
                                <div className="User_left">
                                    <img src={robohash} className="User_image"/>
                                </div>
                                SEARCH <br/>PAGE
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Search)