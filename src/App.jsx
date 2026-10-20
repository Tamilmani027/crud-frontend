import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  axios.defaults.baseURL = "https://backend-crud-p339.onrender.com/";

  const getUsers = async () => {
    try {
      const res = await axios.get('/users');
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const getUserById = async (id) => {
    try {
      const res = await axios.get(`/users/${id}`);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const createUser = async () => {
    try {
      const newUser = { name: "New User", age: 22, city: "Bengaluru" };
      const res = await axios.post('/users', newUser);
      console.log(res.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const updateUser = async (id) => {
    try {
      const updatedUser = { name: "Updated User", age: 25, city: "Chennai" };
      const res = await axios.put(`/users/${id}`, updatedUser);
      console.log(res.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`/users/${id}`);
      console.log(res.data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <div className='crudOperations'>
        <h1>HTTP Methods Demo</h1>

        <button onClick={getUsers}>GET users</button>
        <button onClick={() => getUserById(2)}>GET user by ID</button>
        <button onClick={createUser}>POST user</button>
        <button onClick={() => updateUser(2)}>PUT user</button>
        <button onClick={() => deleteUser(1)}>DELETE user</button>
      </div>
    </>
  )
}

export default App
