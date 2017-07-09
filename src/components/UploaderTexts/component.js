/* eslint no-return-assign:0 */
import React, {PureComponent, PropTypes} from 'react'

import FileUpload from 'material-ui/svg-icons/file/file-upload'
import {Label, Input, Claim, UploadClaim} from './styles'

export const ShowUploadFiles = ({files}, {i18n}) => {
  return (
    <UploadClaim>{`${files.length} ${i18n.t('FILES_SELECTS')}`}</UploadClaim>
  )
}
ShowUploadFiles.propTypes = { files: PropTypes.array }
ShowUploadFiles.contextTypes = { i18n: PropTypes.object }

class UploaderTexts extends PureComponent {
  static displayName = 'UploaderTexts'
  static propTypes = {
    fileHandler: PropTypes.func,
    dragHover: PropTypes.func,
    i18n: PropTypes.shape({
      t: PropTypes.func
    })
  }

  componentDidMount () {
    const {fileHandler, dragHover} = this.props
    this._label.addEventListener('dragover', dragHover, false)
    this._label.addEventListener('dragleave', dragHover, false)
    this._label.addEventListener('drop', fileHandler, false)
  }

  componentWillUnmount () {
    const {fileHandler, dragHover} = this.props
    this._label.removeEventListener('drop', fileHandler)
    this._label.removeEventListener('dragover', dragHover)
    this._label.removeEventListener('dragleave', dragHover)
  }

  render () {
    return (
      <Label htmlFor='upload' innerRef={node => this._label = node}>
        <FileUpload />
        <Claim>{this.props.i18n.t('UPLOAD_TEXTS')}</Claim>
        <Input id='upload' type='file' multiple='multiple' onChange={this.props.fileHandler} />
      </Label>
    )
  }
}

export default UploaderTexts
