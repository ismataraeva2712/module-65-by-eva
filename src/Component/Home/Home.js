import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const handleDelete = id => {
        const procced = window.confirm("are you sure want to delet?")
        if (procced) {
            console.log(id, "user id")
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted')
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining)
                    }
                })
        }

    }
    return (
        <div>
            {
                users.map(u => <li key={u._id}>{u.name} {u.email}
                    <Link to={`/update/${u._id}`}><button>Update</button></Link>
                    <button onClick={() => handleDelete(u._id)}>X</button>
                </li>)
            }
        </div>
    );
};

export default Home;