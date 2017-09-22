import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';
import './Dashboard.css';
import home from "../../assets/home.png";
import search from"../../assets/search.png";

class Private extends Component {
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
                            <span className="Header_logout">Logout</span>
                            </div>
                    </div>
                </div>
                <div className="Dashboard_parent">
                    <div className="Dash_child_conatiner">
                        <div className="Dash_child_top">
                            <div className="User_container">
                                <div className="User_left"></div>

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

export default connect(mapStateToProps,{ getUser })(Private)