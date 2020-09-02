/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import React from 'react'
import { Heading, Box } from 'rebass'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header sx={{ mb: 3 }}>
    <Box
      sx={{
        maxWidth: 9,
        p: 3,
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <Heading
        as="h1"
        m={0}
        mx="auto"
        display="block"
        fontSize={6}
        fontWeight="bold"
      >
        <Link
          to="/"
          sx={{
            color: 'text',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </Heading>
    </Box>
  </header>
)

export default Header
