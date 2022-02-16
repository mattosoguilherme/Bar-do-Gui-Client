import styled from "styled-components";

export const CardUser = () => {
  const CardS = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    width: 12rem;
    padding: 0.8rem;
    background-color: #262626;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: white;

    button{
        width:5rem;
        border-radius:0.5rem;
  
    }

    button:hover{
        background-color: transparent;
        color:white;
    }

    div{
        width: 100%;
        display: flex;
        justify-content:space-between
    }

  `;

  return (
    <CardS>
      <p>Nome: Guilherme</p>
      <p>Email: guilherm@gmail.com</p>
      <p>Autorização: USER</p>

      <div>
      <button type="button">Excluir</button>
      <button type="button">Editar</button>
      </div>
     
    </CardS>
  );
};
