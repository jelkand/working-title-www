/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'

import { Box, Flex } from 'rebass'

interface TableProps<T> {
  data: T[]
  maxRows?: number
}

const TableHeader = (elements: string[]) => {}

const Table = <T,>({ data, maxRows }: TableProps<T>) => {
  const keys = Object.keys(data[0])

  // const headerLine =

  return (
    <Box as="table">
      <Box bg="contrast" color="primary" as="tr">
        {keys.map(keyName => (
          <Box key={keyName} as="th">
            {keyName}
          </Box>
        ))}
      </Box>
      {data.map(dataRow => {
        return (
          <Box as="tr">
            {keys.map(key => (
              <Box as="td">{dataRow[key]}</Box>
            ))}
          </Box>
        )
      })}
    </Box>
  )
}

export default Table
