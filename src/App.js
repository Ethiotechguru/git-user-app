import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/users/Users'
import Search from './components/users/users/Search'
import axios from 'axios'
class App extends Component{
  state = {
    users:[],
    loading: false
  }
  async componentDidMount(){
    this.setState({
      loading:true,
    })
    const res = await axios('https://api.github.com/users');
    this.setState({
      users:res.data,
      loading:false
    })
  }
    render(){
      return (
       <div className="App">
         <Navbar title="Git Finder"/>
         <Search/>
         <div className="container">
           <Users loading={this.state.loading} users={this.state.users}/>
         </div>
         
       </div>
      )
  }
}

export default App;

