/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { Link, PageProps } from 'gatsby'
import { Box, Text } from 'rebass'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage: React.FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Text mt={2} fontSize={5}>
      Four reviewers with no qualifications embark on an epic journey to review
      every entry on IMDB's top 250 English Language Movies.
    </Text>
    <Box height={4} />

    <iframe
      src="https://share.transistor.fm/e/working-title/latest"
      width="100%"
      height="180"
      frameBorder="0px"
      scrolling="no"
      seamless={true}
      sx={{
        width: '100%',
        height: '180px',
      }}
    ></iframe>
  </Layout>
)

export default IndexPage
