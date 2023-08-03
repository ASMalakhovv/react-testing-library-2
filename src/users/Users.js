import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
    }

    return (
        <div>
            {users.map(user => <Link
                to={`/users/${user.id}`}
                key={user.id}
                data-testid="user-item"
            >
                {user.name}
            </Link>
            )}
        </div>
    )
}
