import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'


const AddFriends = () => {
    const {push} = useHistory()
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = e => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post('/friends', form)
            .then(() => {
                push('/friends')
            })
            .catch(err => {
                console.error(err)
            })
    }

    return(
        <div>
            <h1>Add Friend</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' name='name' onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='age'>Age:</label>
                    <input id='age' name='age' onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' name='email' onChange={handleChange}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriends;