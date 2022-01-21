import React, { PureComponent } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

// 将路由拆分成数组的形式，有点像 vue 路由配置
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

// 创建组件的一种形式，变量的形式
const lis = routes.map((item, index) => {
    return (
        <li key={index}>
            <Link to={item.to}>
                {item.content}
            </Link>
        </li>
    )
})

// 类组件的形式
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


// 这里的 Switch Route 有点类似 js 中的 switch case 表示精准匹配
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
