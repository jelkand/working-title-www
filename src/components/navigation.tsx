/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link, PageProps } from 'gatsby'
import React from 'react'
import { WindowLocation } from '@reach/router'

interface NavigationProps {
  location: WindowLocation<WindowLocation['state']>
}

const Navigation: React.FC<NavigationProps> = ({ location }) => {
  console.log(location)
  return <div>Navigation</div>
}

export default Navigation
