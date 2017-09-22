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
                IS IT WORKING???
                <a href='http://localhost:3535/auth/logout'><div>Logout</div></a>
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