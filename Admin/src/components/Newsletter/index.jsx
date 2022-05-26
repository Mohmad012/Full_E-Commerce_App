

import {
    Container,
    Title,
    Desc,
    InputContainer,
    Input,
    Button
} from "./style"

const Newsletter = () => {
  return (
    <Container>
        <Title data-aos="fade-up" data-aos-delay='200'>Newsletter</Title>
        <Desc data-aos="fade-up" data-aos-delay='250'>Get timely updates from your favorite products.</Desc>
        <InputContainer data-aos="fade-up" data-aos-delay='300'>
            <Input placeholder="Your email" />
            <Button>
              
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter