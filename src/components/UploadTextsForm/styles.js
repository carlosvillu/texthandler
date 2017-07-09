import SelectFieldMUI from 'material-ui/SelectField'

import {styled} from 'styletron-react'

export const Container = styled('div', {
  display: 'flex'
})

export const SelectsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1
})
export const UploaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 2,
  borderLeft: '1px solid rgb(0, 188, 212)'
})

export const SelectField = styled(SelectFieldMUI, {
  marginRight: '10px'
})
