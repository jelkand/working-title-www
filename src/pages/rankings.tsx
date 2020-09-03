/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useMemo } from 'react'
import { Link, Page, PageProps, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Column } from 'react-table'
import { transpose, indexBy, prop, range, map } from 'ramda'
import Table from '../components/table'

interface RankedContentfulFilm {
  // todo centralize
  id: string
  title: string
}

interface RankingsPageData {
  allContentfulReviewer: {
    nodes: Array<Reviewer>
  }
}

interface Reviewer {
  id: string
  name: string
  rankings: Array<Partial<RankedContentfulFilm>>
}

interface ReviewerRanking {
  idx: number
  junRanking: string
  shaneRanking: string
  mikeRanking: string
  jackRanking: string
}

const AboutPage: React.FC<PageProps<RankingsPageData>> = ({
  data,
  location,
}) => {
  const reviewerOrdering = ['Jun', 'Shane', 'Mike', 'Jack']
  const columns: Array<Column<ReviewerRanking>> = useMemo(
    () => [
      {
        Header: 'Rank',
        accessor: 'idx',
        width: 30,
      },
      {
        Header: 'Jun',
        accessor: 'junRanking',
        width: 90,
      },
      {
        Header: 'Shane',
        accessor: 'shaneRanking',
        width: 90,
      },
      {
        Header: 'Mike',
        accessor: 'mikeRanking',
        width: 90,
      },
      {
        Header: 'Jack',
        accessor: 'jackRanking',
        width: 90,
      },
    ],
    []
  )

  console.log({ columns })

  const keyedRankings = indexBy<Reviewer>(prop('name'))(
    data.allContentfulReviewer.nodes
  )

  const orderedRankings = reviewerOrdering.map(
    reviewerName => keyedRankings[reviewerName].rankings
  )

  const transposed = transpose(orderedRankings)

  const mapped: Array<ReviewerRanking> = transposed.map((film, idx) => ({
    idx: idx + 1,
    junRanking: film[0].title,
    shaneRanking: film[1].title,
    mikeRanking: film[2].title,
    jackRanking: film[3].title,
  })) as Array<ReviewerRanking>

  const tableData = useMemo(() => mapped, [])

  return (
    <Layout location={location}>
      <SEO title="About" />
      <Box>
        <Table<ReviewerRanking> data={tableData} columns={columns} />
      </Box>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query RankingsPage {
    allContentfulReviewer {
      nodes {
        id
        name
        rankings {
          id
          title
        }
      }
    }
  }
`
