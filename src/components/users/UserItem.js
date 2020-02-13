import React from 'react'
import { Link } from 'react-router-dom'
const UserItem = ({user:{login,html_url,avatar_url}})=> {
        return (
            <div className="card text-center">
                <img 
                    src={avatar_url}
                    alt={login}
                    className="round-img"
                />
                <Link to={`user/${login}`} className="card__link">
                    <h4 className="card__title">{login}</h4>
                </Link>
            </div>
        )
}

export default UserItem
