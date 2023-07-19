import styled from "styled-components";
import Header from "./layoutComponent/header";
import { useLocation, useOutlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Sidebar from "./layoutComponent/sidebar";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import useSidebarClose from "@/hooks/useSidebarClose";

const LayoutContainer = styled.div`
  min-height: 100vh;
  height: 100%;
`;
const ContentLayout = styled.div`
  display: flex;
  height: 100%;
  min-height: calc(100vh - 72px);
  .outlet {
    flex-grow: 1;
  }
`;

const MainLayout = () => {
  const widowWidth = useSidebarClose();
  const [sidebar, setSidebar] = useState<boolean>(widowWidth > 1000);
  const location = useLocation();
  const nodeRef = useRef(null);
  const currentOutlet = useOutlet();
  useEffect(() => {
    setSidebar(widowWidth > 1000);
  }, [widowWidth]);
  return (
    <LayoutContainer>
      <Header setSidebar={setSidebar} />
      <ContentLayout>
        {sidebar && <Sidebar />}
        <SwitchTransition>
          <CSSTransition nodeRef={nodeRef} key={location.key} timeout={300} classNames="page">
            <div className="outlet" ref={nodeRef}>
              {currentOutlet}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </ContentLayout>
    </LayoutContainer>
  );
};
export default MainLayout;
