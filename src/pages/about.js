import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const aboutPage = () => {
	return (
		<Layout>
			<h1>About page</h1>
			<p>The modern way to build the web
			Gatsby is a React-based open source framework for creating websites and apps. 
			Build anything you can imagine with over 2000 plugins and performance, scalability, and security built-in by default.</p>
			<Link to="https://www.youtube.com/watch?v=8t0vNu2fCCM" target="_blank">Video tutorial</Link>
		</Layout>
	)
}

export default aboutPage;