/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link, Page, PageProps, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const ReviewersPage: React.FC<PageProps> = ({ data, location }) => {
  console.log({ data })
  return (
    <Layout location={location}>
      <SEO title="About" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default ReviewersPage

export const pageQuery = graphql`
  query ReviewersPage {
    allContentfulReviewer {
      nodes {
        id
        name
        bio {
          id
          bio
        }
      }
    }
  }
`
