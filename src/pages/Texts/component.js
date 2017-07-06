import React, {PropTypes} from 'react'

import AppBar from 'material-ui/AppBar'

import {Container} from './styles'
import UploadTextsDialog from '../../components/UploadTextsDialog'

const Texts = ({toggleDrawer, i18n}) => (
  <Container>
    <AppBar
      title={i18n.t('TITLE')}
      onLeftIconButtonTouchTap={toggleDrawer}
    />
    <UploadTextsDialog />
    Texts
  </Container>
)

Texts.displayName = 'Texts'
Texts.propTypes = {
  toggleDrawer: PropTypes.func,
  i18n: PropTypes.shape({
    t: PropTypes.func
  })
}

export default Texts
