import React, { Component } from 'react'

export class UserItem extends Component {
    render() {
        const {login, avatar_url, html_url} = this.props.user
        return (
            <div className="card text-center">
                <h2>{login}</h2>
                <img alt={login} src={avatar_url} className='round-img' style = {{width:'100px'}}/>
                <div><a className="btn btn-dark btn-lg my-1" href={html_url}>More</a></div>
                
                
            </div>
        )
    }
}

export default UserItem
