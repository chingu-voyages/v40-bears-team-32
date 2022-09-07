import styled from 'styled-components'

const Header = (props) => {
    return (
        <Nav>
            <Logo>
                <img src="/images/YD.svg" alt="youdemy logo" />
            </Logo>
            <NavMenu>
            <a href="/home">
              <img src="/images/Home.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a href="/courses">
              <img src="/images/School.svg" alt="COURSES" />
              <span>COURSES</span>
            </a>
            <a>
              <img src="/images/Search.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
          </NavMenu>
          <Login>Login</Login>
        </Nav>
    )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: rgba(43, 167, 220, 0.90);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  letter-spacing: 1rem;
  z-index: 3;
`

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    img {
      height: 2rem;
      min-width: 2rem;
      width: 2rem;
      z-index: auto;
      margin-right: 0.5rem;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 1rem;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -0.5rem;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const Login = styled.a`
  background-color: rgba(35, 31, 32, 1);
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export default Header