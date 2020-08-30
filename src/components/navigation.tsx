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

const Divider = () => <Box height="1px;" width="100%" bg="contrast" />

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

  const renderLink = (menuLink: Maybe<SiteSiteMetadataMenuLinks>) => {
    const isCurrentPage = menuLink?.url === location.pathname
    return (
      menuLink && (
        <Box>
          <Link
            to={menuLink.url!}
            sx={{
              textDecoration: isCurrentPage ? 'underline' : 'none',
              fontSize: 4,
              fontWeight: isCurrentPage ? 'bold' : undefined,
            }}
          >
            {menuLink.name}
          </Link>
        </Box>
      )
    )
  }

  const menuLinks = data.site?.siteMetadata?.menuLinks
  console.log(location)
  return (
    <Box>
      <Divider />
      <Flex justifyContent="space-evenly">
        {menuLinks && menuLinks.map(renderLink)}
      </Flex>
      <Divider />
    </Box>
  )
}

export default Navigation
