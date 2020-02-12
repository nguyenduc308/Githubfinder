import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Axios from 'axios';
import Search from './components/users/Search'
class App extends Component {
  state = {
    loading:false,
    users: []
  }
  async componentDidMount() {
    this.setState({
      loading: true
    })
    const res = await Axios.get(`https://api.github.com/users?client_id=2408028885be686f99e4&client_secret=7e2a459b829a38db15757ca077b70e73b058e259`)
    this.setState({
      users: res.data,
      loading: false
    })
  }
  searchUsers = async text => {
    this.setState({
      loading: true
    })
    const res = await Axios.get(`https://api.github.com/users?q=${text}?client_id=2408028885be686f99e4&client_secret=7e2a459b829a38db15757ca077b70e73b058e259`)
    this.setState({
      users: res.data,
      loading: false
    })
    console.log(this.state)
  }
  render() {
    const injectedProps = this.state;
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
            <Search searchUsers = {this.searchUsers}/>
            <Users {...injectedProps} />   
        </div>  
      </div>
    )
  }
}

export default App;
