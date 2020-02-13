import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: '',
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.searchUsers(this.state.text)
        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <div className="search">
                <form onSubmit={this.onSubmit.bind(this)} className="form">
                    <input 
                    type="text"
                    name="text" 
                    className="form__input" 
                    placeholder="Input username here"
                    value={this.state.text}
                    onChange={this.onChange}
                    />
                    <button type="submit" className="form__btn">Search</button>
                </form>
            </div> 
        )
    }
}

export default Search
