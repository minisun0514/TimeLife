import React from 'react';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
// } from "react-router-dom";
import { Layout} from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;

const App = () => {
    return (
        <Layout>
            <Header>head</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
        </Layout>
    );
}

export default App;