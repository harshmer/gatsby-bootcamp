module.exports = {
    siteMetadata: {
        title: 'Gatsby-Bootcamp',
        author: 'Hash Brown'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
        	resolve: 'gatsby-source-filesystem',
        	options: {
        		name: 'src',
        		path: `${__dirname}/src/`
        	}
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 800,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ]
}
