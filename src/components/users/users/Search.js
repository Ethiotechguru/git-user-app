import React, { Component } from 'react'

 class Search extends Component {
     state={
         text:''
     }
    onChange = e => {
        this.setState({
            text:e.target.value,
        })
    }
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.text)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                        type="text" name="text" 
                        value={this.state.text} 
                        placeholder = "Search Use"
                        onChange={this.onChange}
                    />
                    <input type='submit' value='Submit' className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}
export default Search