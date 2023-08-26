import { Link } from '@inertiajs/inertia-react';
import React from 'react';

const Home = ({name}) => {
    return (
        <>

        <h1>This is test component for {name}</h1>
        <nav>
            <ul>
                <li><Link href="/settings">Settings</Link></li>
                <li></li>
            </ul>
        </nav>
        </>
    )
}

export default Home
