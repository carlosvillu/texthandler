import React from 'react'

import ListTexts, {LoadingTexts} from './component'

import {compose, withLocalService} from '@schibstedspain/ddd-react-redux'
import branch from 'recompose/branch'
import renderComponent from 'recompose/renderComponent'

export default compose(
  withLocalService('list_texts_use_case'),
  branch(
    props => props.listTexts === undefined,
    renderComponent(props => <LoadingTexts {...props} />)
  )
)(ListTexts)
