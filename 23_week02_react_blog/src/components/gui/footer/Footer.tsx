import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="border-dev-white">
            <p>Footer</p>
            <Link to={'/admin'}>Admin</Link>
        </div>
    );
}

export default Footer;
