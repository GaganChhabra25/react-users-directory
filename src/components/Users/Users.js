import React from 'react'
import Card from './../UI/Card';

const Users = (props) => {
    
    return (
        <Card>
            <div className="users">
                <h3>Users List</h3>
                <ul>
                    {props.users.map(user => {
                       return <li key={user.id}>{user.name} ({user.age} years)</li>
                    })}
                </ul>
            </div>
        </Card>
 
    )
}

export default Users
