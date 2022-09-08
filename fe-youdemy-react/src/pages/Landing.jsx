import styled from "styled-components";
import {Link} from 'react-router-dom'

const Landing = (props) => {
    return (
        <Container>
            <Content>
                <BgImage />
                <Background>
                    <Title>Youdemy</Title>
                    <TextBlock>
                      <Subtitle>Looking to Learn?</Subtitle>
                      <Description>
                        Jumpstart your career by learning from our expert instructors
                      </Description>
                      <Join to="/register/student">New Student</Join>
                      <Divider />
                      <Subtitle>Looking to Teach?</Subtitle>
                      <Description>
                          Start teaching on our creator-friendly e-learning platform
                      </Description>
                      <Join to="/register/instructor">New Instructor</Join>
                    </TextBlock>
                </Background>
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow:hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/hero.jfif");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const Background = styled.div`
    background-color: rgba(43, 167, 220, 0.90);
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius: 0.5rem;   
`

const Title = styled.h1`
    color: #f9f9f9;
    font-size: 3.5rem;
    letter-spacing: 0.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    margin: 1rem 0;
`

const Subtitle = styled.h2`
  margin:0;
`

const Join = styled(Link)`
  font-weight: bold;
  background-color: rgba(35, 31, 32, 1);
  color: white;
  width: 75%;
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  font-weight: 700;
  padding: 16.5px 0;
  border-radius: 0.5rem;
  transition: all 0.2s ease 0s;
  &:hover {
    color: rgba(35, 31, 32, 1);
    background-color: white;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
`

const Description = styled.p`
  margin: 0;
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Divider = styled.hr`
  width: 100%;
`
export default Landing