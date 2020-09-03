/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { Box, Text, Flex } from 'rebass'
import { Link, Page, PageProps, graphql, useStaticQuery } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

interface ReviewersPageData {
  allContentfulReviewer: {
    nodes: Array<{
      id: string
      name: string
      bio: {
        id: string
        bio: string
      }
      bioImage?: {
        fluid: FluidObject
      }
    }>
  }
}

interface ReviewerBlockProps {
  right: boolean
  name: string
  bio: string
  imgSrc?: FluidObject
}

const ReviewerBlock: React.FC<ReviewerBlockProps> = ({
  right,
  name,
  imgSrc,
  bio,
}) => {
  const BioBlock = () => (
    <Box maxWidth={7} m={3}>
      <Text display="block" fontWeight="bold" fontSize={4} pb={3}>
        {name}
      </Text>
      <Text>{bio}</Text>
    </Box>
  )

  const ImageBlock = () => (
    <Box width="200px" m={3}>
      {imgSrc && <Img fluid={imgSrc} />}
    </Box>
  )

  const Content = () =>
    right ? (
      <React.Fragment>
        <BioBlock />
        <ImageBlock />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <ImageBlock />
        <BioBlock />
      </React.Fragment>
    )

  return (
    <Flex
      width="100%"
      justifyContent="space-around"
      // p={3}
      flexWrap={right ? 'wrap-reverse' : 'wrap'}
    >
      <Content />
    </Flex>
  )
}

const ReviewersPage: React.FC<PageProps<ReviewersPageData>> = ({
  data,
  location,
}) => {
  console.log({ data })
  return (
    <Layout location={location}>
      <SEO title="Reviewers" />
      {data.allContentfulReviewer.nodes.map(({ name, bio, bioImage }, idx) => (
        <>
          <ReviewerBlock
            name={name}
            bio={bio.bio}
            imgSrc={bioImage?.fluid}
            right={idx % 2 === 0}
          />
          {idx < data.allContentfulReviewer.nodes.length && (
            <Box width="100%" height="2px" bg="contrast" />
          )}
        </>
      ))}
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
        bioImage {
          fluid(maxWidth: 200) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
