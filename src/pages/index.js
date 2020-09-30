import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const indexPage = () => {
    return (
        <Layout>
            <h1>Hello, this is my sample webpage using Gatsby.</h1>
            <p>To know what Gatsby is about, please visit about page: <Link to='/about'>About</Link></p>
            <p>Navigate to the Contact page for the video tutorial link: <Link to='/contact'>Here!</Link></p> 
        </Layout> 
    )
}

export default indexPage;
