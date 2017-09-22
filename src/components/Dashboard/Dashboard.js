import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';
import './Dashboard.css';

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
            <div className=''>
                <h1>Profile</h1>
                <h4>Account information:</h4>
                { this.props.user ? <img className='avatar' src={this.props.user.picture} /> : null }
                <p>Firstname: { this.props.user ? this.props.user.firstname : null }</p>
                <p>Lastname: { this.props.user ? this.props.user.lastname : null }</p>
                <p>Email: { this.props.user ? this.props.user.email : null }</p>
                
                <a href='http://localhost:3535/auth/logout'><button>Log out</button></a>
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