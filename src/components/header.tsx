/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import React from 'react'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header
    sx={{
      mb: 3,
    }}
  >
    <div
      sx={{
        backgroundColor: 'contrast',
        maxWidth: 9,
        p: 3,
        margin: '0 auto',
      }}
    >
      <Styled.h1
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
      </Styled.h1>
    </div>
  </header>
)

export default Header
