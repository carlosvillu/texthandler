import React, {PropTypes} from 'react'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const AppDrawer = ({drawerUI, onRequestChange}) => {
  return (
    <Drawer
      docked={false}
      open={!!drawerUI}
      onRequestChange={onRequestChange}
    >
      <AppBar showMenuIconButton={false} />
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
  )
}

AppDrawer.displayName = 'Drawer'
AppDrawer.propTypes = {
  drawerUI: PropTypes.bool,
  onRequestChange: PropTypes.func
}

export default AppDrawer
