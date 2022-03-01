import styled from 'styled-components'

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 1rem 0;
  z-index: 10;

  .nav-logo {
    position: relative;
    top: 6px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 930px;
  }

  ul {
    display: flex;
    position: relative;
    top: 3px;
    list-style-type: none;
  }

  li {
    margin-left: 1.8rem;

    img {
      border: 2px solid ${(props) => props.theme.borderAvatar};
    }
  }

  @media screen and (max-width: 970px) {
    nav {
      width: 90%;
    }
  }

  @media screen and (max-width: 670px) {
    input {
      display: none;
    }
  }
`
