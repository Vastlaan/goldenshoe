import {FlexCol, Text, TextBold} from '../../styles'

export default function ContactComponent() {
  return (
    <FlexCol align='flex-start' justify='flex-start'>
      <TextBold color='white'>Contact us:</TextBold>
      <br/>
      <Text align='left' color='#EFF0EF'>30123 Dover St, London W1S 4NB, UK</Text>
      <br/>
      <Text align='left' color='#EFF0EF'>info@goldenshoe.com</Text>
      <Text align='left' color='#EFF0EF'>+31 682 30 70 51</Text>
      <br/>
      <Text align='left' color='#EFF0EF'>Opening times (GMT)</Text>
      <Text align='left' color='#EFF0EF'>Mon - Sun: 8 AM - 9 PM</Text>
    </FlexCol>
  )
}
