import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const contactPage = () => {
	return (
		<Layout>
			<h1>Contact page</h1>
			<p>Below is the tutorial</p>
			<Link to="https://www.youtube.com/watch?v=8t0vNu2fCCM" target="_blank">Video tutorial</Link>
		</Layout>
	)
}
// As we are pointing to external link, Link element is not required. However i have used it to have smooth transition.
export default contactPage;