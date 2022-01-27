import React, { PureComponent } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const routes = [
    {
        to: '/',
        content: 'Home'
    },
    {
        to: '/about',
        content: 'About'
    },
    {
        to: '/users',
        content: 'Users'
    }
]

const lis = routes.map((item, index) => {
    return (
        <li key={index}>
            <Link to={item.to}>
                {item.content}
            </Link>
        </li>
    )
})

class Home extends PureComponent {
    render() {
        return <h2>Home</h2>;
    }
}

class About extends PureComponent {
    render() {
        return <h2>About</h2>;
    }
}

class Users extends PureComponent {
    render() {
        return <h2>Users</h2>;
    }
}

export default class HelloRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            {lis}
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}
