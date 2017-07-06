import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Drawer from '../Drawer'

import {Container} from './styles'

const Root = ({children}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Container>
      <Drawer />
      {children}
    </Container>
  </ MuiThemeProvider>
)

Root.displayName = 'Root'
Root.propTypes = {
  children: React.PropTypes.element
}

export default Root
