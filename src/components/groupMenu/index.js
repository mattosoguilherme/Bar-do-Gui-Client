import styled from "styled-components";
import Item from "../card/item"


const ContainerS = styled.main`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  justify-content:space-around;
`;

const GroupMenu = () => {
    return <ContainerS>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </ContainerS>
}

export default GroupMenu;