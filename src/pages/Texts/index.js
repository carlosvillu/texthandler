import {PropTypes} from 'react'
import Texts from './component'

import {compose, mapUIServiceToProps, mapUIResponseToProps} from '@schibstedspain/ddd-react-redux'
import withHandlers from 'recompose/withHandlers'
import getContext from 'recompose/getContext'

export default compose(
  mapUIServiceToProps('drawer'),
  mapUIResponseToProps('drawer'),
  getContext({
    i18n: PropTypes.object
  }),
  withHandlers({
    toggleDrawer: ({drawerUI, setDrawerUI}) => () => setDrawerUI(!drawerUI)
  })
)(Texts)
