import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUser } from '../../ducks/reducer'

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
            <div className=''>
                <h1>Community Bank</h1><hr />
                <h4>Account information:</h4>
                { this.props.user ? <img className='avatar' src={this.props.user.img} /> : null }
                <p>Username: { this.props.user ? this.props.user.user_name : null }</p>
                <p>Email: { this.props.user ? this.props.user.email : null }</p>
                <p>ID: { this.props.user ? this.props.user.auth_id : null }</p>
                <h4>Available balance: { this.props.user ? '$' + Math.floor((Math.random() + 1) * 100) + '.00' : null } </h4>
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

export default connect(mapStateToProps,{ getUser })(Private)