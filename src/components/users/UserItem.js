import React from 'react'

const UserItem = ({user:{login,html_url,avatar_url}})=> {
        return (
            <div className="card text-center">
                <img 
                    src={avatar_url}
                    alt={login}
                    className="round-img"
                />
                <a href={html_url} className="card__link">
                    <h4 className="card__title">{login}</h4>
                </a>
            </div>
        )
}

export default UserItem
