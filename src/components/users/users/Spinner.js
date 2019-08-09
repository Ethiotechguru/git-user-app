import React, { Component } from 'react'

 class Spinner extends Component {
    render() {
        return (
            <div>
                <img src="https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif" alt="loading..."
                    style={{margin:'auto', width:'200px', display:'block'}}
                />
            </div>
        )
    }
}
export default Spinner