import React from 'react'
import UserItem from './UserItem'
import Spinner from '../spinner/Spinner'
const Users =({users,loading})=> {
            if(loading) {
               return <Spinner />
            } else {
             return(<div className="user-items">
                {
                    users.map((user) => 
                    <UserItem user={user} key={user.id} id={user.id}/>)
                }
            </div>)
            }
}

export default Users
