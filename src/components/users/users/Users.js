import React, { Component } from 'react'
import UserItem from './UserItem';
import Spinner from './Spinner';

class Users extends Component {
    render() {
        const {users, loading} = this.props
        if(loading){
            return(
                <Spinner/>
            )
        }else{
           return (
                <div style={userStyle} className="card text-center">
                    {users.map(user => (
                        <UserItem key={user.id} user={user}/>
                    ))}
                </div>
            ) 
        }
        
    }
}
const userStyle = {
    display:'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '1rem'
}
export default Users
