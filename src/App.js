import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

import Login from './components/Login';
import AddFriends from './components/AddFriends';
import FriendsList from './components/FriendsList';
import Logout from './components/logout';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to='login' className='links'>Login</Link>
          <Link to='friends' className='links'>Friends List</Link>
          <Link to='friends/add' className='links'>Add Friends</Link>
          <Link to='logout' className='links'>Logout</Link>
        </header>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path='/login'>
          <Redirect to='/'/>
        </Route>
        <PrivateRoute exact path='/friends' component={<FriendsList/>}/>
        <PrivateRoute exact path='/friends/add' component={<AddFriends/>}/>
        <PrivateRoute exact path='/logout' component={<Logout/>}/>
      </div>
    </Router>
  );
}

export default App;
