import React, {PropTypes, PureComponent} from 'react'

import MenuItem from 'material-ui/MenuItem'

import UploaderTexts from '../UploaderTexts'

import {
  Container,
  SelectField,
  SelectsContainer,
  UploaderContainer
} from './styles'

class UploadTextsForm extends PureComponent {
  static displayName = 'UploadTextsForm'
  static propTypes = {
    onCompleted: PropTypes.func,
    setCollection: PropTypes.func,
    collection: PropTypes.string,
    collectionHandler: PropTypes.func,
    sequence: PropTypes.number,
    sequenceHandler: PropTypes.func,
    course: PropTypes.string,
    courseHandler: PropTypes.func,
    collectionConfig: PropTypes.array,
    sequenceConfig: PropTypes.array,
    courseConfig: PropTypes.array,
    filesHandler: PropTypes.func,
    files: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string
    })),
    i18n: PropTypes.shape({
      t: PropTypes.func
    })
  }

  render () {
    const {
      collection, sequence, course, files,
      collectionHandler, sequenceHandler, courseHandler, filesHandler,
      collectionConfig, sequenceConfig, courseConfig,
      onCompleted
    } = this.props

    collection &&
    sequence &&
    course &&
    files &&
    onCompleted({collection, sequence, course, files})

    return (
      <Container>
        <SelectsContainer>
          {this.selectFactory(collection, collectionHandler, 'FRECUENCY', collectionConfig)}
          {this.selectFactory(sequence, sequenceHandler, 'SEQUENCY', sequenceConfig)}
          {this.selectFactory(course, courseHandler, 'COURSE', courseConfig)}
        </SelectsContainer>
        <UploaderContainer>
          <UploaderTexts onFiles={filesHandler} />
        </UploaderContainer>
      </Container>
    )
  }

  selectFactory = (value, onChange, label, items) => {
    const {i18n} = this.props
    return (
      <SelectField
        floatingLabelText={i18n.t(label)}
        value={value}
        onChange={onChange}
      >
        {items.map(({value, literal}) => <MenuItem value={value} key={value} primaryText={i18n.t(literal)} />)}
      </SelectField>
    )
  }
}

export default UploadTextsForm
