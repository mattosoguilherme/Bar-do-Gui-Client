import styled from "styled-components";

const Navbar = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #260707;

  div{
      display:flex;
      justify-content:space-between;
  }

  a{
      font-size:2rem;
      color:white;
  }
`;

export default Navbar;
