/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link, PageProps, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Table from '../components/table'

const MockList = [
  {
    title: 'The Killing',
    imdbRanking: 250,
    jackRanking: 1,
    shaneRanking: 2,
    junRanking: 2,
    mikeRanking: 1,
  },
  {
    title: 'Touch of Evil',
    imdbRanking: 249,
    jackRanking: 2,
    shaneRanking: 1,
    junRanking: 1,
    mikeRanking: 2,
  },
]

const ListPage: React.FC<PageProps> = ({ data, location }) => {
  console.log({ data })
  return (
    <Layout location={location}>
      <SEO title="The List" />
      {/* <Table data={MockList} /> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query GetAllFilms {
    allContentfulFilm(sort: { order: DESC, fields: imdbRanking }) {
      nodes {
        id
        imdbRanking
        title
      }
    }
  }
`

export default ListPage
