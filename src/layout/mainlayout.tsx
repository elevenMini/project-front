import styled from "styled-components";
import Header from "./layoutComponent/header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./layoutComponent/sidebar";

const LayoutContainer = styled.div`
  /* max-width: 1200px; */
`;
const ContentLayout = styled.div`
  display: flex;
`;

const MainLayout = () => {
  const [sidebar, setSidebar] = useState<boolean>(true);
  return (
    <LayoutContainer>
      <Header />
      <ContentLayout>
        {sidebar && <Sidebar />}
        <Outlet />
      </ContentLayout>
    </LayoutContainer>
  );
};
export default MainLayout;
