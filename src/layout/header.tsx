import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: aqua;
  box-shadow: 0 0 8px 15px rgba(0, 0, 0, 0.11);
`;

const Header = () => {
  return <HeaderContainer>Header</HeaderContainer>;
};
export default Header;
