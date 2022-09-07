import styled from "styled-components";

const Home = (props) => {
    return (
        <Container>
            <Content>
                <BgImage />
                <Background>
                    <Title>Youdemy</Title>
                    <Join>Join Now</Join>
                    <Description>
                        Looking for a jumpstart into a new career?
                        Everything is a la carte.
                        Learn at your own pace.
                        Create your dreams one class at a time.
                    </Description>
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
  background-image: url("https://images.unsplash.com/photo-1584697964358-3e14ca57658b");
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
`

const Join = styled.a`
  font-weight: bold;
  background-color: white;
  color: rgba(43, 167, 220, 1);
  margin-bottom: 12px;
  width: 35%;
//   letter-spacing: 1.5px;
  font-size: 1rem;
  padding: 16.5px 0;
  border: 1px solid white;
  border-radius: 0.5rem;
  &:hover {
    color: #f9f9f9;
    background-color: rgba(43, 167, 220, 1);
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 1rem;
  margin: 1.5rem 0 1.5rem 0;
  line-height: 1.5;
  letter-spacing: 1.5px;
  font-weight: bold;
`;

export default Home