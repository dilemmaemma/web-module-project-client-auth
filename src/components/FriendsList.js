import React, { useState, useEffect } from 'react'
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return(
        <div>
            <h1>Friends List</h1>
            <ul>
                {
                    friends.map(friend => {
                        return <li>{friend.name} - {friend.age} - {friend.email}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default FriendsList;