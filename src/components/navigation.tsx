/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { WindowLocation } from '@reach/router'
import { Box, Flex } from 'rebass'
import {
  SiteMetaDataQuery,
  SiteSiteMetadataMenuLinks,
  Maybe,
} from '../../graphql-types'

interface NavigationProps {
  location: WindowLocation<WindowLocation['state']>
}

const Divider = () => <Box height="2px" width="100%" bg="contrast" />

const renderLink = (pathname: string) => (
  menuLink: Maybe<SiteSiteMetadataMenuLinks>
) => {
  const isCurrentPage = menuLink?.url === pathname
  return (
    menuLink && (
      <Box key={menuLink?.url}>
        <Link
          to={menuLink.url!}
          sx={{
            textDecoration: isCurrentPage ? 'underline' : 'none',
            fontSize: 3,
            fontWeight: isCurrentPage ? 'bold' : undefined,
          }}
        >
          {menuLink.name}
        </Link>
      </Box>
    )
  )
}

const Navigation: React.FC<NavigationProps> = ({ location }) => {
  const data = useStaticQuery<SiteMetaDataQuery>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            menuLinks {
              name
              url
            }
          }
        }
      }
    `
  )

  const menuLinks = data.site?.siteMetadata?.menuLinks
  return (
    <Box py={2} pb={4}>
      <Divider />
      <Flex justifyContent="space-evenly">
        {menuLinks && menuLinks.map(renderLink(location.pathname))}
      </Flex>
      <Divider />
    </Box>
  )
}

export default Navigation
