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
  @media (max-width:420px) {
    background-color: #260707;
    height: 1000px;
    align-items: start;
  }

  .modal-body{
    font-size:2rem;
    color:white;
  }

  .modal-footer{
    justify-content: center;
  }

  .modal-footer button{
    width:8rem;
    height: 3rem;
    border-radius: 0.3rem;
    font-size:2rem;
    background-color: #D9C5C5;
    &:hover{
      background-color: transparent;
      color:white;
    }
  }

  .modal-header{
      background-color:#73161E;
      border-bottom: none;
  }
  .modal-body{
    background-color:#73161E;
  }
  .modal-footer{
    border-top:none;
    background-color:#73161E;
  }

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
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  width: 7rem;
  border-radius: 0.5rem;
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
  margin-top:6rem;
  width: 30rem;
  padding: 1rem;
  border-radius:1rem;
  box-shadow: 3px 3px 10px 3px;
  @media (max-width:900px){
      width: 25rem;
      margin-top:5rem;
      border:none;
      box-shadow: none;
  }

  h1{
    font-size:3rem;
    align-self:center;
    color:white;
  }

  input {
    height: 3rem;
    font-size: 1rem;
    padding-left: 0.3rem;
    margin-bottom: 2rem;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    color:white;
  }

  img{
    display: flex;
    position: relative;
    align-self:end;
    margin-bottom: 2rem;
  }
 

  div {
    display: flex;
    margin-top: 0.7rem;
    font-size: 1.2rem;
  }

  #div-button{
    display: flex;
    justify-content: center;
  }

  a { 
    color: white;

    &:hover{
        color:#A6122D;
    }
  }
`;


export default Container;
