import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const handleUpdate = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const updateUser = { name, email }

        // send data to server
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => console.log('success', data))
        alert('user added successfully')
        event.target.reset()
    }
    return (
        <div>
            <p>user update {user.name}</p>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" placeholder='name' id="" />
                <br /> <br />
                <input type="email" name="email" placeholder='email' id="" />
                <br /> <br />
                <input type="submit" value="update User" />
            </form>
        </div>
    );
};

export default UpdateUser;