import {PropTypes} from 'react'

import ItemTexts from './component'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'

export default compose(
  getContext({
    i18n: PropTypes.shape({
      t: PropTypes.func
    })
  }),
)(ItemTexts)
