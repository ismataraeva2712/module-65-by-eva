import React from 'react';

const AddUSer = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const user = { name, email }

        // send data

        fetch('http://localhost:5000/user', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log('success', data))
        alert('user added successfully')
        event.target.reset()
    }
    return (
        <div>
            <h2>plese add a user</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='name' id="" />
                <br /> <br />
                <input type="email" name="email" placeholder='email' id="" />
                <br /> <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUSer;