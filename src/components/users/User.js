import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }
    render() {
        const {
            name, avatar_url, location, bio, blog, html_url, followers, following, hireable,company,login
        } = this.props.user
        const {loading} = this.props;
        return (
            <>
                <Link to="/" className="btn btn-primary mg-bt-10">Back to Home</Link>
                <div className="user-profile">
                    <div className="user-profile__left">
                        <img src={avatar_url} alt={name} className="square-img" />
                        <h4 className="card__title">
                            <a href={html_url} className="card__link">{name? name :login}</a>
                        </h4>
                        <h4>Location : {location || "Unknown" }</h4>
                        <p>Company: {company || "Unknown" }</p>
                    </div>
                    <div className="user-profile__right">
                        <p>- Username: <strong>{login}</strong></p>
                        <p>- Hireable: {hireable?"Yes": "No"}</p>
                        <p>- Followers: {followers}</p>
                        <p>- Following: {following}</p>
                        <p>- Website: {blog?<a href={blog} >{blog}</a> : ""}</p>
                        <h4>Bio</h4>
                        <p>{bio}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default User
