import React, {Component, PropTypes} from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import {FloatingActionButton} from './styles'

class UploadTextsDialog extends Component {
  static displayName = 'UploadTextsDialog'
  static propTypes = {
    onRequestClose: PropTypes.func,
    onTouchTap: PropTypes.func,
    onHandleClosed: PropTypes.func,
    i18n: PropTypes.shape({
      t: PropTypes.func
    }),
    open: PropTypes.bool
  }

  render () {
    const {onRequestClose, open, onTouchTap, i18n} = this.props

    return (
      <div>
        <Dialog
          title={i18n.t('UPLOAD_DIALOG_TITLE')}
          actions={this.actions()}
          modal={false}
          open={open}
          onRequestClose={onRequestClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
        <FloatingActionButton
          secondary
          zDepth={3}
          onTouchTap={onTouchTap}
        >
          <ContentAdd />
        </FloatingActionButton>
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
      primary
      onTouchTap={this.props.onHandleClosed}
    />
  ])
}

export default UploadTextsDialog
