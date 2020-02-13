import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Axios from 'axios';
import Search from './components/users/Search';
import About from './components/pages/About'

class App extends Component {
  state = {
    loading:false,
    users: [],
    user: {}
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
      loading: true,
    })
    const res = await Axios.get(`https://api.github.com/users/${text}`)
    const user = res.data;
    console.log(typeof(user))
    this.setState({
      users: [{...user}],
      loading: false,
    })
    console.log(this.state.users)
  }
  getUser = async (username) => {
    this.setState({loading:true})
    const res= await Axios.get(`https://api.github.com/users/${username}`);
    this.setState({
      user:res.data,
      loading: false
    })
  }
  render() {
    const injectedProps =  this.state, { user} = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <div className="container">
              <Switch>
                <Route exact path="/" render={props=>(
                  <>
                    <Search searchUsers = {this.searchUsers}/>
                    <Users {...injectedProps} />   
                  </>
                )} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" render={props=>(
                  <User {...props} getUser={this.getUser} user={user} />
                )} />
              </Switch>
          </div>  
        </div>
      </Router>
 
    )
  }
}

export default App;
