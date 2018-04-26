import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../styles/index.css'
import '../styles/normalize.css'
import '../styles/font.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      htmlAttributes={{
        lang: 'en',
      }}
      meta={[
        {
          name: 'description',
          content:
            'Designer, Developer & Entrepreneur creating amazing experiences for the web. @soyoag',
        },
        { name: 'author', content: 'Omar Aguinaga' },
        {
          name: 'keywords',
          content:
            'jQuery, javascript, API, HTML, JS,ES6,CSS,Front End, frontend,front-end, full-stack, full stack, react,mexico, developer, freelancer',
        },
        { property: 'og:title', content: 'Omar Aguinaga' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:url', content: 'https://www.aguina.ga/' },
        { property: 'og:site_name', content: 'Omar Aguinaga' },
      ]}
    />
    <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
