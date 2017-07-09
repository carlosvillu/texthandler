import {PropTypes} from 'react'
import UploadTextsDialog from './component'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'
import withHandlers from 'recompose/withHandlers'

export default compose(
  withState('open', 'setOpen', false),
  withState('form', 'setForm', {}),
  getContext({
    i18n: PropTypes.shape({
      t: PropTypes.func
    })
  }),
  withHandlers({
    onCompleted: ({setForm}) => form => setForm(form),
    onRequestClose: ({setOpen, setForm, open}) => () => {
      setForm({})
      setOpen(!open)
    },
    onTouchTap: ({setOpen}) => () => setOpen(true),
    onHandleClosed: ({setForm, setOpen}) => () => {
      setForm({})
      setOpen(false)
    },
    onHandleSubmit: props => () => {
      console.log({...props.form}) // eslint-disable-line
      props.setForm({})
      props.setOpen(false)
    }
  })
)(UploadTextsDialog)
