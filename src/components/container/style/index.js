import styled from "styled-components";
const ContainerS = styled.main`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 420px) {
    background-color: #260707;
    height: 1000px;
    align-items: start;
  }
`;

export const ContainerAdm = styled.main`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 420px) {
    background-color: #262626;
    height: 1000px;
    align-items: start;
  }
`;

export default ContainerS;
