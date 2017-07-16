import {styled} from 'styletron-react'

export const ContainerListTexts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '25px'
})

export const Container = styled('div', props => ({
  color: 'brown',
  fontSize: '12px',
  textAlign: 'center'
}))
