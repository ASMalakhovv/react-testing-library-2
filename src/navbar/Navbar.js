import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = (props) => {
    return (
        <>
            <Link to="/" data-testid="main-link">Main Page</Link>
            <Link to="/about" data-testid="about-link">About Page</Link>
            <Link to="users" data-testid="users-link">Users</Link>
        </>
    )
};
