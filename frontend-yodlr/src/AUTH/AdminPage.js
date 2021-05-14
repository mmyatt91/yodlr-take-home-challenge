import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UsersAPI from '../API/UsersAPI';

// Admin Page
// Routed @ '/admin'

function AdminPage () {
  const [users, setUsers] = useState();
  const [userUpdated, setUserUpdated] = useState(true);

  // List all users upon component mount and when state of users' account is changed or deleted
  useEffect(() => {
    const listUsers = async () => {
      const res = await UsersAPI.getAllUsers();
      setUsers(res);
    }
    if(userUpdated) {
      listUsers();
      setUserUpdated(false)
    };
  }, [userUpdated])

  // Handles user updates by toggling true if changed
  const handleUpdate = async id => {
    await UsersAPI.updateUser(id);
    setUserUpdated(true);
  }

  // Handles user deletion 
  const handleDelete = async id => {
    await UsersAPI.deleteUser(id);
    setUserUpdated(true);
  }

  return (
    <div className="AdminPage">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h1 className="mb-3">Users</h1>
        <div className="Users-container">
          {users.map(user => (
            <li key={user.id}>
              {user.email}
              {user.firstName}
              {user.lastName}
              {user.state === 'active' ? 
              <button 
                className="btn btn-primary btn-block mt-4" 
                onClick={handleUpdate(user.id)}>
                Deactivate
              </button> :
              <button 
                className="btn btn-primary btn-block mt-4" 
                onClick={handleUpdate(user.id)}>
                Activate
              </button>
              }
              <button
                className="btn btn-primary btn-block mt-4"
                onClick={handleDelete(user.id)}>
                Delete
              </button>
            </li>
          ))}
        </div>
        <p>
          <Link className="btn btn-primary font-weight-bold mr-3" to="/">Back to Home</Link>
        </p>
      </div>
    </div>
  )
};

export default AdminPage;