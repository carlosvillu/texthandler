import {PropTypes} from 'react'
import UploadTextsDialog from './component'

import {withLocalService} from '@schibstedspain/ddd-react-redux'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'
import withHandlers from 'recompose/withHandlers'

export default compose(
  withState('open', 'setOpen', false),
  withState('form', 'setForm', {}),
  withLocalService('upload_texts_use_case'),
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
      props.uploadTextsUseCase(props.form)
      props.setForm({})
      props.setOpen(false)
    }
  })
)(UploadTextsDialog)
