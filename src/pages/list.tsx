/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useMemo } from 'react'
import { Link, PageProps, graphql } from 'gatsby'
import { Flex, Box, Text } from 'rebass'
import {
  useTable,
  usePagination,
  UsePaginationOptions,
  Column,
} from 'react-table'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import Table from '../components/table'

interface ContentfulFilm {
  id: string
  title: string
  imdbRanking: number
}

const ListPage: React.FC<PageProps<{
  allContentfulFilm: { nodes: ContentfulFilm[] }
}>> = ({ data, location }) => {
  const columns: Array<Column<ContentfulFilm>> = useMemo(
    () => [
      {
        Header: 'IMDb Ranking',
        accessor: 'imdbRanking',
        width: '90',
      },
      {
        Header: 'Title',
        accessor: 'title',
        // width: '0',
      },
    ],
    []
  )

  const tableData = useMemo(() => data.allContentfulFilm.nodes, [])

  return (
    <Layout location={location}>
      <SEO title="The List" />
      <Text fontSize={3}>
        IMDb's top 250 English-language movies, collected in November of 2019.
      </Text>
      <Box height={3} />
      <Box>
        <Table<ContentfulFilm> data={tableData} columns={columns} />
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query GetAllFilms {
    allContentfulFilm(sort: { order: DESC, fields: imdbRanking }) {
      nodes {
        imdbRanking
        title
      }
    }
  }
`

export default ListPage
