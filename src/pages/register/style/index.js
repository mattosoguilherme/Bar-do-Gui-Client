import styled from "styled-components";
export const FormRegister = styled.form`
  background-color: #260707;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  width: 30rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 10px 3px;
  @media (max-width: 900px) {
    width: 25rem;
    margin-top: 2rem;
    border: none;
    box-shadow: none;
  }
  h1 {
    font-size: 2.5rem;
    align-self: center;
    color: white;
  }

  input {
    height: 3rem;
    font-size: 1rem;
    padding-left: 0.3rem;
    margin-bottom: 0.4rem;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    color: white;
  }

  textarea {
    margin-bottom: 0.5rem;
  }

  label {
    color: white;
    font-size: 1.5rem;
  }

  .group-btn {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .btnRegister {
    width: 7rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    padding: 0.3rem;
    &:hover {
      background-color: transparent;
      color: #a6122d;
    }
  }

  #btnOrder{
    border-radius: 0.3rem;
    height: 3rem;
    font-size:1.5rem;
  }

  .orders{
    background-color:blue;
    display:flex;
    justify-content:center;
    flex-direction: column;
    text-align: center;
  }
  .orders button{
    margin-bottom: 0.5rem;
  }
`;

export const FormRegisterAdm = styled.form`
  background-color: #262626;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  width: 30rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 10px 3px;
  @media (max-width: 900px) {
    width: 25rem;
    margin-top: 2rem;
    border: none;
    box-shadow: none;
  }
  h1 {
    font-size: 2.5rem;
    align-self: center;
    color: white;
  }

  input {
    height: 3rem;
    font-size: 1rem;
    padding-left: 0.3rem;
    margin-bottom: 0.4rem;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    color: white;
  }

  textarea {
    margin-bottom: 0.5rem;
    padding-left: 0.2rem;
  }

  label {
    color: white;
    font-size: 1.5rem;
  }

  .group-btn {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .btnRegister {
    width: 7rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    padding: 0.3rem;
    &:hover {
      background-color: transparent;
      color: white;
    }
  }

  select{
    height: 3rem;
  }

  #btnOrder{
    border-radius: 0.3rem;
    height: 3rem;
    font-size:1.5rem;
  }

  .orders{
    background-color:blue;
    display:flex;
    justify-content:center;
    flex-direction: column;
    text-align: center;
  }
  .orders button{
    margin-bottom: 0.5rem;
  }
`;
