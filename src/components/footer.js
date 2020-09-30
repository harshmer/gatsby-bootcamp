import React from 'react';

import {graphql, useStaticQuery } from 'gatsby';
import footerStyles from './footer.module.scss';

const Footer = () => {
	const footerData = useStaticQuery(graphql`
			query {
			  site {
			    siteMetadata {
			      author
			    }
			  }
			}
		`)
	return (
		<footer className={footerStyles.footer}>
			<p>Created by {footerData.site.siteMetadata.author}, © 2020</p>
		</footer>
		)
}

export default Footer;
