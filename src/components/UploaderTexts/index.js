import {PropTypes} from 'react'
import UploaderTexts, {ShowUploadFiles} from './component'

import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'
import renderComponent from 'recompose/renderComponent'
import getContext from 'recompose/getContext'
import branch from 'recompose/branch'
import compose from 'recompose/compose'

export default compose(
  withState('files', 'setFiles', []),
  getContext({
    i18n: PropTypes.shape({
      t: PropTypes.func
    })
  }),
  withHandlers({
    fileHandler: props => async event => {
      event.stopPropagation()
      event.preventDefault()
      const files = await Promise.all(
        Array.from(event.target.files || event.dataTransfer.files).map(file => new Promise(resolve => {
          const reader = new window.FileReader()
          reader.onloadend = event => resolve({name: file.name, content: event.target.result})
          reader.readAsText(file)
        }))
      )
      props.setFiles(files)
      props.onFiles(files)
    },
    dragHover: props => event => {
      event.stopPropagation()
      event.preventDefault()
    }
  }),
  branch(
    props => props.files.length !== 0,
    renderComponent(ShowUploadFiles)
  )
)(UploaderTexts)
