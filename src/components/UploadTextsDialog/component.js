import React, {PureComponent, PropTypes} from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import UploadTextsForm from '../UploadTextsForm'

import {FloatingActionButton} from './styles'

class UploadTextsDialog extends PureComponent {
  static displayName = 'UploadTextsDialog'
  static propTypes = {
    onCompleted: PropTypes.func,
    onRequestClose: PropTypes.func,
    onTouchTap: PropTypes.func,
    onHandleClosed: PropTypes.func,
    onHandleSubmit: PropTypes.func,
    i18n: PropTypes.shape({
      t: PropTypes.func
    }),
    open: PropTypes.bool,
    form: PropTypes.shape({
      collection: PropTypes.string,
      sequence: PropTypes.number,
      course: PropTypes.string,
      files: PropTypes.array
    })
  }

  render () {
    const {
      onCompleted, onTouchTap, onRequestClose,
      open, i18n
    } = this.props

    return (
      <div>
        <Dialog
          title={i18n.t('UPLOAD_DIALOG_TITLE')}
          actions={this.actions()}
          modal={false}
          open={open}
          onRequestClose={onRequestClose}
        >
          <UploadTextsForm onCompleted={onCompleted} />
        </Dialog>
        <FloatingActionButton
          secondary
          zDepth={3}
          onTouchTap={onTouchTap}
        >
          <ContentAdd />
        </ FloatingActionButton>
      </div>
    )
  }

  actions = () => ([
    <FlatButton
      label={this.props.i18n.t('CANCEL')}
      secondary
      onTouchTap={this.props.onHandleClosed}
    />,
    <FlatButton
      label={this.props.i18n.t('SUBMIT')}
      disabled={Object.keys(this.props.form).length === 0}
      primary={Object.keys(this.props.form).length !== 0}
      onTouchTap={this.props.onHandleSubmit}
    />
  ])
}

export default UploadTextsDialog
