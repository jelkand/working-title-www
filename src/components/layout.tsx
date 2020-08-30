/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { WindowLocation } from '@reach/router'

import Header from './header'
import Navigation from './navigation'

interface LayoutProps {
  // title?: Maybe<string>
  location: WindowLocation<WindowLocation['state']>
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        sx={{
          margin: '0 auto',
          maxWidth: 9,
          p: 3,
          pt: 0,
        }}
      >
        <main>
          <Navigation location={location} />
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </React.Fragment>
  )
}

export default Layout
