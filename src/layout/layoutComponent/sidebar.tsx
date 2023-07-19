import styled from "styled-components";
import { Avatar } from "./header";
import { Link, useLocation } from "react-router-dom";
import { board, home, picture, trash } from "@/assets/icon/icons";
import { Icon } from "@/util";
import { SidebarContainer } from "@/style/layoutstyle/layout";

const Sidebar = () => {
  const location = useLocation();

  const linkColor = (path: string) => {
    const pathStyle = location.pathname.includes(path)
      ? {
          backgroundColor: "#ccc",
          borderLeftColor: "rgb(83, 171, 230)",
        }
      : {};
    return pathStyle;
  };

  return (
    <SidebarContainer>
      <div className="sticky">
        <div className="sidebar-wrraper">
          <div className="userSection">
            <Avatar />
            <div>
              <span>최은석</span>
              <span>설명설명</span>
            </div>
          </div>
          <div className="linkSection">
            <Link to="/main">
              <div className="link-container" style={linkColor("/main")}>
                <Icon src={home} alt="asd" className={"icon-link"} />
                <p className="link-name">홈</p>
              </div>
            </Link>
            <Link to="/gallery">
              <div className="link-container" style={linkColor("/gallery")}>
                <Icon src={picture} alt="asd" className={"icon-link"} />
                <p className="link-name">갤러리</p>
              </div>
            </Link>
            <Link to="/board">
              <div className="link-container" style={linkColor("/board")}>
                <Icon src={board} alt="asd" className={"icon-link"} />
                <p className="link-name">게시판</p>
              </div>
            </Link>
          </div>
          <div className="otherSection">
            <Link to="/trash">
              <div className="link-container" style={linkColor("/trash")}>
                <Icon src={trash} alt="asd" className={"icon-link"} />
                <p className="link-name">휴지통</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </SidebarContainer>
  );
};
export default Sidebar;
