import {PropTypes} from 'react'
import UploadTextsDialog from './component'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'
import withHandlers from 'recompose/withHandlers'

export default compose(
  withState('open', 'setOpen', false),
  getContext({
    i18n: PropTypes.shape({
      t: PropTypes.func
    })
  }),
  withHandlers({
    onRequestClose: ({setOpen, open}) => () => setOpen(!open),
    onTouchTap: ({setOpen}) => () => setOpen(true),
    onHandleClosed: ({setOpen}) => () => setOpen(false)
  })
)(UploadTextsDialog)
