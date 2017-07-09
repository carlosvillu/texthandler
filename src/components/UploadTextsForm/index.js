import {PropTypes} from 'react'
import UploadTextsForm from './component'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import getContext from 'recompose/getContext'

import {mapConfigToProps} from '@schibstedspain/ddd-react-redux'

export default compose(
  withState('collection', 'setCollection'),
  withState('sequence', 'setSequence'),
  withState('course', 'setCourse'),
  withState('files', 'setFiles'),
  getContext({
    i18n: PropTypes.shape({
      t: PropTypes.func
    })
  }),
  withHandlers({
    collectionHandler: ({setCollection}) => (event, index, value) => { setCollection(value) },
    sequenceHandler: ({setSequence}) => (event, index, value) => { setSequence(value) },
    courseHandler: ({setCourse}) => (event, index, value) => { setCourse(value) },
    filesHandler: ({setFiles}) => files => { setFiles(files) }
  }),
  mapConfigToProps('collection', 'sequence', 'course')
)(UploadTextsForm)
