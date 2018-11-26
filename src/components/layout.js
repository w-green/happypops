import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// import Navbar from '../components/Navbar';

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Happy Pops is an indoor play area in the heart of Shoreham. It has been created to engage, entertain and educate kids up to the age of 5.' },
            { name: 'keywords', content: 'shoreham, softplay, children, toddlers, play' },
            { name: 'og:title', content: 'Happy Pops' },
            { name: 'og:description', content: 'Happy Pops is an indoor play area in the heart of Shoreham. It has been created to engage, entertain and educate kids up to the age of 5.'},
            { name: 'og:image', content: 'https://www.happypops.co.uk/static/footer-logo-300x131-f2d32ff1f96a343d8c911fceb124a64b-c0fdf.png' }
          ]}
        >
            <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet"></link>
          <html lang="en" />
        </Helmet>
        <Header />

        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
