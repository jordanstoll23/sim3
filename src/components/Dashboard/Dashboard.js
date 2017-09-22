import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';
import './Dashboard.css';
import home from "../../assets/home.png";
import search from"../../assets/search.png";
import robohash from "../../assets/robohash.png";

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount(){
        this.props.getUser()
    }

    render() {
        return (
            <div className='DashHome'>
                <div className="HeaderParent">
                    <div className="HeaderChild">
                        <div className="Child1">
                            <span className="Header_title">Helo</span>
                            <a href="/"><img src={home} className="Header_home_img"/></a>
                            <a href="/search/1"><img src={search} className="Header_search_img"/></a>
                        </div>
                        <div className="Child2">
                            <span className="Header_page">Dashboard</span>
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
                                <div className="User_right">
                                    <span classname="User__first_name"></span>
                                    <span className="User__last_name"></span>
                                    <a href="/profile"><button class="User__btn_edit">Edit Profile</button></a>
                                </div>
                                <div class="Dashboard__onboarding">
                                    <div className="Dashboard__onboarding-content-container">
                                        <span class="open-sans">Welcome to Helo! Find recommended friends based 
                                        on your similarities, and even search for them by name. 
                                        The more you update your profile, the better recommendations we can make!
                                        </span>
                                    </div>
                                </div>
                            </div>
                        <div className="Dashboard_recommended_parent">
                            <div className="Dashboard__recommended_child">
                                <div className="Dashboard__recommended_child-content-container">
                                <div class="Dashboard__recommended_header">
                                    <span class="Dashboard__recommended_header_span"> Recommended Friends </span>
                                    <span class="Dashboard__recommended_select_span"> Sorted by </span>
                                    <select class="Dashboard__recommended_select">
                                        <option value="first"> First Name </option>
                                        <option value="last"> Last Name </option>
                                        <option value="gender"> Gender </option>
                                        <option value="hobby"> Hobby </option>
                                        <option value="h_color"> Hair Color </option>
                                        <option value="e_color"> Eye Color </option>
                                        <option value="birthday"> Birthday </option>
                                    </select>
                                </div>
                               
                                </div>

                            </div>

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

export default connect(mapStateToProps,{ getUser })(Dashboard)