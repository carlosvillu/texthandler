import React, {PropTypes} from 'react'

import AppBar from 'material-ui/AppBar'

import {Container, ContainerListTexts} from './styles'
import UploadTextsDialog from '../../components/UploadTextsDialog'
import ListTexts from '../../components/ListTexts'

const Texts = ({toggleDrawer, i18n}) => {
  return (
    <Container>
      <AppBar
        title={i18n.t('TITLE')}
        onLeftIconButtonTouchTap={toggleDrawer}
      />
      <UploadTextsDialog />
      <ContainerListTexts>
        <ListTexts />
      </ContainerListTexts>
    </Container>
  )
}

Texts.displayName = 'Texts'
Texts.propTypes = {
  toggleDrawer: PropTypes.func,
  i18n: PropTypes.shape({
    t: PropTypes.func
  })
}

export default Texts
