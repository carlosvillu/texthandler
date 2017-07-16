import React, {PropTypes} from 'react'

import LibraryBooks from 'material-ui/svg-icons/av/library-books'
import LinearScale from 'material-ui/svg-icons/editor/linear-scale'
import SupervisorAccount from 'material-ui/svg-icons/action/supervisor-account'

import {
  Container,
  ContainerInfo,
  ContainerInfoSection,
  ContainerInfoSectionText,
  ContainerText,
  Paragraph
} from './styles'

const ItemTexts = ({text, i18n}) => {
  return (
    <Container className='ItemTexts'>
      <ContainerInfo className='ItemTexts-ContainerInfo'>

        <ContainerInfoSection className='ContainerInfoSection'>
          <LibraryBooks /><ContainerInfoSectionText>{i18n.t(text.collection)}</ContainerInfoSectionText>
        </ContainerInfoSection>

        <ContainerInfoSection className='ContainerInfoSection'>
          <LinearScale /><ContainerInfoSectionText>{i18n.t(text.sequence)}</ContainerInfoSectionText>
        </ContainerInfoSection>

        <ContainerInfoSection className='ContainerInfoSection'>
          <SupervisorAccount /><ContainerInfoSectionText>{i18n.t(text.course)}</ContainerInfoSectionText>
        </ContainerInfoSection>
      </ContainerInfo>
      <ContainerText className='ItemTexts-ContainerText'>
        <Paragraph>{text.content}</Paragraph>
      </ContainerText>
    </Container>
  )
}

ItemTexts.propTypes = {
  i18n: PropTypes.shape({
    t: PropTypes.func
  }),
  text: PropTypes.shape({
    collection: PropTypes.string,
    sequence: PropTypes.number,
    course: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.string,
    raw: PropTypes.string
  })
}

export default ItemTexts
