import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export const Users = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
    }

    const onClick = (id) => {
        navigate(`/users/${id}`)
    };

    return (
        <div data-testid="users-page">
            {users.map(user => <div
                onClick={() => onClick(user.id)}
                key={user.id}
                data-testid="user-item"
            >
                {user.name}{' '}
            </div>
            )}
        </div>
    )
}
