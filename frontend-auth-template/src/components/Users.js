import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
;
const Users = () => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        axiosWithAuth()
        .get('/users')
        .then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
        .catch(err => console.log(err.response))
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            {users.map(user => {
                return (
                    <h3 key={user.id}>{user.username}</h3>
                )
            })}
        </div>
    )
}

export default Users;