import styled from "styled-components";

 const CardItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 10rem;
  background-color: #a6122d; 
  margin-top:1rem;
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
    border-radius: 5px;
    margin: 10px;
  }
  .card-body {
    background-color: #d9c5c5;
    width: 100%;
  }

  span{
    background-color: #bf382c !important;
    font-size: 1.2rem !important;
    margin-bottom: 0.5rem;
  }
  .badgePrice{
      width: 100%;
      margin-top:0.5rem;
  }
`;

export default CardItem;