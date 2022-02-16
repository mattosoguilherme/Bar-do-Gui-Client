import styled from "styled-components";
 const CardS = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 15rem;
  padding: 0.8rem;
  background-color: #262626;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: white;

  .btn{
    display: flex;
    justify-content:center;
    width: 100%;
  }

  button {
    align-self: center;
    width: 10rem;
    border-radius: 0.5rem;
  }
  span{
    background-color:#7D5CF2;
    border-radius: 0.3rem;
    padding:0.2rem;
    margin-right:0.3rem ;
  }

  button:hover {
    background-color: transparent;
    color: white;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export default CardS
