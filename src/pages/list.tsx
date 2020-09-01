/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useMemo } from 'react'
import { Link, PageProps, graphql } from 'gatsby'
import { Flex, Box, Button } from 'rebass'
import { useTable, usePagination, UsePaginationOptions } from 'react-table'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
// import Table from '../components/table'

declare module 'react-table' {
  // namespace 'react-table' {
  interface TableOptions<D extends object = {}>
    extends UsePaginationOptions<D> {}
  // }
}

const ListPage: React.FC<PageProps<{ allContentfulFilm: { nodes: any } }>> = ({
  data,
  location,
}) => {
  const columns = useMemo(
    () => [
      {
        Header: 'IMDb Ranking',
        accessor: 'imdbRanking',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
    ],
    []
  )

  const tableData = useMemo(() => data.allContentfulFilm.nodes, [])

  const tableInstance = useTable(
    { columns, data: tableData, initialState: { pageSize: 25 } },
    usePagination
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    pageOptions,
    page,
    state: { pageIndex, pageSize },
    // gotoPage,
    previousPage,
    nextPage,
    // setPageSize,
    canPreviousPage,
    canNextPage,
  } = tableInstance

  return (
    <Layout location={location}>
      <SEO title="The List" />

      <Box as="table" {...getTableProps()}>
        <Box as="thead">
          {headerGroups.map(hg => (
            <Box as="tr" {...hg.getHeaderGroupProps()}>
              {hg.headers.map(col => (
                <Box as="th" {...col.getHeaderProps()}>
                  {col.render('Header')}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
        <Box as="tbody" {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <Box as="tr" {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <Box as="td" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Box>
                ))}
              </Box>
            )
          })}
        </Box>
      </Box>

      <Box>
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous Page
        </Button>
        <Box display="inline-block" mx={3}>
          Page {pageIndex + 1} of {pageOptions.length}
        </Box>
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          Next Page
        </Button>
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
