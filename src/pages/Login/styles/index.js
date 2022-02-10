import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivPass = styled.div`
  display: flex;
  flex-direction: row-reverse;

  button {
    position:absolute;
    border: none;
    background-color: transparent;
    align-self:center;
    margin-right: 0.2rem;
  }

  input {
    width: 100%;
  }
`;

export const ButtonLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  width: 7rem;
  border-radius: 5px;
  text-align:center;

  &:hover{
    color:#A6122D;
    background-color:transparent
  }
`;

export const FormLogin = styled.form`
  background-color: #260707;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top:8rem;
  width: 30rem;
  padding: 1rem;
  border-radius:1rem;
  box-shadow: 3px 3px 10px 3px;
  @media (max-width:900px){
      width: 20rem;
  }

  h1{
    align-self:center;
    color:white;
  }

  label {
    color: white;
    font-size: 1.5rem;
  }

  input {
    height: 3rem;
    font-size: 1rem;
    padding-left: 0.3rem;
    border-radius:0.3rem;
  }

  img{
    display: flex;
    position: relative;
    align-self:end;
  }

  div {
    display: flex;
    margin-top: 0.7rem;
    justify-content: space-between;
    font-size: 1.2rem;
  }

  a {
    color: white;

    &:hover{
        color:#A6122D;
    }
  }
`;


export default Container;
