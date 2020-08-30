/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { Link, PageProps } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage: React.FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Styled.p>
      Four reviewers with no qualifications embark on an epic journey to review
      every entry on IMDB's top 250 English Language Movies.
    </Styled.p>
  </Layout>
)

export default IndexPage
