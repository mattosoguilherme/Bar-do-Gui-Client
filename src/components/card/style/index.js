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

  .btn {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  button {
    align-self: center;
    width: 10rem;
    border-radius: 0.5rem;
  }
  span {
    background-color: #7d5cf2;
    border-radius: 0.3rem;
    padding: 0.2rem;
    margin-right: 0.3rem;
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

export const CardTableS = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 20rem;
  padding: 0.8rem;
  background-color: #73161e;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: white;

  span {
    padding: 0.2rem;
    background-color: #bf382c !important ;
  }

  table {
    color: white;
  }

  .card-body {
    background-color: #d9c5c5;
    color: black;
  }

  .group-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .group-btn button {
    width: 5rem;
    font-size: 1.3rem;
    border-radius: 0.5rem;
    padding: 0.3rem;
    &:hover {
      background-color: transparent;
      color: white;
    }
  }
`;

export const CardItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 15rem;
  background-color: #a6122d;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const EditableCardIS = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 15rem;
  background-color: #262626;
  margin-top: 1rem;
  margin-bottom: 1rem;

  h2 {
    color: white;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
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

  span {
    background-color: #7d5cf2 !important;
    font-size: 1.2rem !important;
    margin-bottom: 0.5rem;
  }
  .badgePrice {
    width: 100%;
    margin-top: 0.5rem;
  }

  .group-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .group-btn button {
    width: 5rem;
    font-size: 1.3rem;
    border-radius: 0.5rem;
    padding: 0.3rem;
    &:hover {
      background-color: transparent;
      color: white;
    }
  }
`;

export default CardS;
