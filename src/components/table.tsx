/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { Box, Button, Flex, Text } from 'rebass'

import { useTable, usePagination, Column, useFlexLayout } from 'react-table'

interface TableProps<T extends object = {}> {
  data: T[]
  columns: Array<Column<T>>
}

const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  const tableInstance = useTable<T>(
    { columns, data, initialState: { pageSize: 25 } },
    usePagination,
    useFlexLayout
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
    <Box>
      <Box
        as="table"
        mx="auto"
        {...getTableProps()}
        width="100%"
        maxWidth="100%"
        sx={{ overflow: 'auto' }}
      >
        <Box as="thead">
          <Box
            bg="contrast"
            color="primary"
            sx={{ borderTopLeftRadius: 3, borderTopRightRadius: 3 }}
          >
            {headerGroups.map(hg => (
              <Box as="tr" {...hg.getHeaderGroupProps()}>
                {hg.headers.map(col => (
                  <Box
                    as="th"
                    {...col.getHeaderProps()}
                    minHeight={3}
                    sx={{
                      lineHeight: 2,
                    }}
                    ml={2}
                  >
                    {col.render('Header')}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
        <Box as="tbody" {...getTableBodyProps()}>
          {page.map((row, idx) => {
            prepareRow(row)
            return (
              <Box
                as="tr"
                {...row.getRowProps()}
                minHeight={4}
                sx={{
                  ':hover': {
                    bg: 'muted',
                  },
                }}
              >
                {row.cells.map((cell, idx) => (
                  <Box
                    as="td"
                    {...cell.getCellProps()}
                    ml={2}
                    sx={{
                      lineHeight: 2,
                      textAlign: 'center',
                      fontWeight: idx === 0 ? 'bold' : 'body',
                    }}
                  >
                    {cell.render('Cell')}
                  </Box>
                ))}
              </Box>
            )
          })}
        </Box>
      </Box>
      <Box width="100%" height="2px" bg="contrast" my={2} />
      {pageOptions.length > 1 && (
        <Flex width="100%" justifyContent="space-evenly" height={4} p={2}>
          <Button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            variant="navButton"
          >
            <Text width="100%">Previous</Text>
          </Button>
          <Box display="inline-block" mx={3}>
            {pageIndex + 1} / {pageOptions.length}
          </Box>
          <Button
            variant="navButton"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <Text width="100%">Next</Text>
          </Button>
        </Flex>
      )}
    </Box>
  )
}

export default Table
