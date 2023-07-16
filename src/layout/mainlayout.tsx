import styled from "styled-components";
import Header from "./header";
import { Outlet } from "react-router-dom";

const LayoutContainer = styled.div`
  /* max-width: 1200px; */
`;

const MainLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <div>
        <Outlet />
      </div>
    </LayoutContainer>
  );
};
export default MainLayout;
