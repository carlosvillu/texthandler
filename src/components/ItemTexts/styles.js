import Paper from 'material-ui/Paper'
import {styled} from 'styletron-react'

export const ContainerInfo = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px'
})

export const ContainerInfoSection = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%'
})

export const ContainerInfoSectionText = styled('span', {
  marginLeft: '10px'
})

const fontSize = 12
const lineHeight = 1.4
const linesToShow = 3

export const Paragraph = styled('p', {
  display: 'block', /* Fallback for non-webkit */
  height: `${fontSize * lineHeight * linesToShow}px`, /* Fallback for non-webkit */
  margin: '0 10px',
  fontSize: `${fontSize}px`,
  lineHeight: lineHeight,
  lineClamp: linesToShow,
  boxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

export const ContainerText = styled('div', {
  flex: 3,
  textAlign: 'left',
  margin: '10px 0'
})
export const Container = styled(Paper, {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '2.5px',
  width: '100%'
})
