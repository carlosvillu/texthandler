import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Drawer from '../Drawer'

import {Container} from './styles'

import {
  teal900, red500
} from 'material-ui/styles/colors'

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
const palette = {
  palette: {
    primary1Color: teal900,
    primary2Color: red500
  }
}

const Root = ({children}) => (
  <MuiThemeProvider muiTheme={getMuiTheme(palette)}>
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
