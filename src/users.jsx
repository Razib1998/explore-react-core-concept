import { useEffect, useState } from "react"
import './users.css'
import user from "./user";
import User from "./user";
    export default function Users(){
// Declare a state to hold the data

const [users, setUsers] = useState([]);

// useEffect with dependency array

useEffect(()=>{

    // Use fetch to load the data

  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => setUsers(data))

}, [])

    return (
        <div className="box">
        <h3>users: {users.length}</h3>
        {
            users.map(user => <User user = {user}></User>)
        }
        </div>
    )
}