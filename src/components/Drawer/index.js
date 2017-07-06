import AppDrawer from './component'

import {compose, mapUIResponseToProps, mapUIServiceToProps} from '@schibstedspain/ddd-react-redux'
import withHandlers from 'recompose/withHandlers'

export default compose(
  mapUIResponseToProps('drawer'),
  mapUIServiceToProps('drawer'),
  withHandlers({
    onRequestChange: ({setDrawerUI}) => open => setDrawerUI(open)
  })
)(AppDrawer)
