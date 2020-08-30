/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import React from 'react'
import { Heading } from 'rebass'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header sx={{ mb: 3, backgroundColor: 'contrast' }}>
    <div
      sx={{
        maxWidth: 9,
        p: 3,
        margin: '0 auto',
      }}
    >
      <Heading
        sx={{
          m: 0,
          color: 'primary',
        }}
      >
        <Link
          to="/"
          sx={{
            color: 'primary',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </Heading>
    </div>
  </header>
)

export default Header
