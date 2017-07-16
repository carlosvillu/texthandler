import React, {PropTypes} from 'react'

import {
  Container,
  ContainerLoadingTexts
} from './styles'

import ItemTexts from '../ItemTexts'

export const LoadingTexts = ({listTextsUseCase}, {i18n}) => {
  listTextsUseCase()
  return <ContainerLoadingTexts>{i18n.t('LOADING')}</ContainerLoadingTexts>
}
LoadingTexts.displayName = 'LoadingTexts'
LoadingTexts.contextTypes = { i18n: PropTypes.object }
LoadingTexts.propTypes = {listTextsUseCase: PropTypes.func}

const ListTexts = ({listTexts}) => {
  return (
    <Container className='ListTexts'>
      {listTexts.map(text => <ItemTexts text={text} key={text.id} />)}
    </Container>
  )
}

ListTexts.propTypes = {
  listTexts: PropTypes.array
}

export default ListTexts
