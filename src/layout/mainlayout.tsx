import styled from "styled-components";
import Header from "./layoutComponent/header";
import { useLocation, useOutlet } from "react-router-dom";
import { useRef, useState } from "react";
import Sidebar from "./layoutComponent/sidebar";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const LayoutContainer = styled.div`
  /* max-width: 1200px; */
`;
const ContentLayout = styled.div`
  display: flex;
  .outlet {
    flex-grow: 1;
  }
`;

const MainLayout = () => {
  const [sidebar, setSidebar] = useState<boolean>(true);
  const location = useLocation();
  const nodeRef = useRef(null);
  const currentOutlet = useOutlet();
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
