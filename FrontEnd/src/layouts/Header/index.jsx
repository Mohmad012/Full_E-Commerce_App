import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Logo,
  Right,
  MenuItem
} from './style'

import {
  Search,
  ShoppingCartOutlined
} from "@material-ui/icons";

import {Badge} from "@material-ui/core";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> EN </Language>
          <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{color:"gray",fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>Buy&amp;Sale</Logo></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary" >
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Header