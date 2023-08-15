import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'


const Login = () => {
    const {push} = useHistory()
    const [creds, setCreds] = useState({
        username:'',
        password:''
    })

    const handleChange = e => {
        const {name, value} = e.target
        setCreds({
            ...creds,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post('/login', creds)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                push('/friends')
            })
            .catch(err => {
                console.error(err)
            })
    }

    return(
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input id='username' onChange={handleChange} name='username'/>
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' onChange={handleChange} name='password'/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
}

  export default Login