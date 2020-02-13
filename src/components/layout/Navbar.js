import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
export class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder'
    };
    static propTypes = {
        title: PropTypes.string.isRequired,
    };
    render() {
        return (
            <div className="navbar text-center">
                <h1><a href="/" className="home-title">{this.props.title}</a></h1>
                <ul className="nav-items">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><Link to="/user/nguyenduc308">Author</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar
