import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import {
  Container,
  Left,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  Payment
} from './style'

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BUY&amp;SALE.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available,but
          the majority have suffered alteration in some form,by injected
          humour,or randomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter/>
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest/>
          </SocialIcon>

        </SocialContainer>
      </Left>
      <Center>

        <Title>Useful Links</Title>
        <List>
          <ListItem> Home </ListItem>
          <ListItem> Cart </ListItem>
          <ListItem> Man Fashion </ListItem>
          <ListItem> Woman Fashion </ListItem>
          <ListItem> Accessories </ListItem>
          <ListItem> My Account </ListItem>
          <ListItem> Order Tracking </ListItem>
          <ListItem> Wishlist </ListItem>
          <ListItem> Wishlist </ListItem>
          <ListItem> Terms </ListItem>
        </List>

      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room /> Cairo, Egypt</ContactItem>
        <ContactItem><Phone /> +2 012 230 723 59</ContactItem>
        <ContactItem><MailOutline /> mohmadgamal454@gmail.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer