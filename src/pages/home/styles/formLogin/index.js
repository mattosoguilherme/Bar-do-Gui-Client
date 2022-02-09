import styled from "styled-components";

const FormLogin = styled.form`
  background-color: #260707;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35rem;
  padding: 1rem;
  margin: 5rem 2rem 5rem 0;
  border-radius:1rem;
  box-shadow: 3px 3px 10px 3px;
  @media (max-width:989px){
      width: 20rem;
  }

  label {
    color: white;
    font-size: 1.5rem;
  }

  input {
    height: 3rem;
    font-size: 1rem;
    padding-left: 0.3rem;
  }

  div {
    display: flex;
    margin-top: 0.7rem;
    justify-content: space-between;
    font-size: 1.2rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    width: 5rem;
  }
  a {
    color: white;
  }
`;

export default FormLogin;
