import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'



const UserHome = (props) => {

    const {user} = useSelector((state) => state.auth) 

    const userProfile = {
        name: user._doc.firstName + " " + user._doc.lastName,
        email: user._doc.email,
        bio: user._doc.profileDescription ? user._doc.profileDescription: "N/A"
    }

    return (
        <Container>
            <ProfileContainer>
                <section className="heading">
                    <Title>Your Profile</Title>
                </section>
                <RowContainer>
                    <figure>
                        <SvgContainer src={user._doc.imageUrl ? user._doc.imageUrl: "/images/male-icon.svg" } alt="" />
                    </figure>
                    <ColumnContainer>
                        <TextBox>
                            <p>{userProfile.name}</p>
                            <TextBoxLabel>Name:</TextBoxLabel>
                        </TextBox>
                        <TextBox>
                            <p>{userProfile.email}</p>
                            <TextBoxLabel>Email:</TextBoxLabel>
                        </TextBox>
                        <TextBox>
                            <p>{userProfile.bio}</p>
                            <TextBoxLabel>Bio:</TextBoxLabel>
                        </TextBox>
                    </ColumnContainer>
                </RowContainer>
            </ProfileContainer>
            <ProfileContainer>
                <section className="heading">
                    <Title>Your Courses</Title>
                </section>
            </ProfileContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ProfileContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(43, 167, 220, 1);
    margin: 2rem 0;
    width: 80%;
`

const Title = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
`

const RowContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 1rem;
`

const ColumnContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const SvgContainer = styled.img`
    height: 70%;
    width: auto;
`

const TextBox = styled.div`
    background-color: white;
    letter-spacing: 0.1rem;
    color: black;
    border-radius: 0.5rem;
    width: 100%;
    text-align: center;
    position: relative;
    margin: 1rem 0;
    margin-bottom: 1.5rem;

`

const TextBoxLabel = styled.p`
    font-size: 1rem;
    font-weight: bold;
    position: absolute;
    letter-spacing: 0rem;
    top: -1.5rem;
    left: 0;
    margin: 0;
`

export default UserHome