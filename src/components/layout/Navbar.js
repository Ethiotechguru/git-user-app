import React, { Component } from 'react'
class Navbar extends Component {
    render() {
        return (
            <div className="navbar bg-primary">
                <h1>
                    <i className="fab fa-github"/>
                    <span className="log">{this.props.title}</span>
                </h1>
            </div>
        )
    }
}

export default Navbar

