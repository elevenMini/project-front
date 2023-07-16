import styled from "styled-components";
import { Avatar } from "./header";
import { Link, useLocation } from "react-router-dom";
import { board, home, picture, trash } from "@/assets/icon/icons";
import { Icon } from "@/util";

const SidebarContainer = styled.aside`
  /* position: fixed;
  top: 0; */
  width: 260px;

  color: black;
  .sticky {
    top: 72px;
    height: calc(100vh - 72px);
    position: sticky;
    width: 260px;
  }
  .sidebar-wrraper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    padding: 0 0 0 16px;
  }
  .userSection {
    display: flex;
    padding: 24px 0 12px 6px;
    width: 100%;
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: 14px;
      justify-content: center;
      padding: 0 10px;
    }
  }

  .linkSection,
  .otherSection {
    gap: 10px;
    display: flex;
    .link-container {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      height: 40px;
      border-radius: 5px;
      padding: 8px 16px;
      font-size: 13px;
      background-color: #fff;
      transition: all 0.5s;
      &:hover {
        background-color: #eee;
      }
      p {
        font-weight: 400;
        display: flex;
        text-align: start;
      }
    }
    .icon-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
    }
    .link-name {
      flex-flow: 1;
    }
  }
  .linkSection {
    flex-direction: column;
    flex-grow: 1;
  }
`;

const Sidebar = () => {
  const location = useLocation();

  const linkColor = (path: string) => {
    const pathStyle =
      location.pathname === path
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
            <Link to="/main/gallery">
              <div className="link-container" style={linkColor("/gallery")}>
                <Icon src={picture} alt="asd" className={"icon-link"} />
                <p className="link-name">갤러리</p>
              </div>
            </Link>
            <Link to="/main/board">
              <div className="link-container" style={linkColor("/board")}>
                <Icon src={board} alt="asd" className={"icon-link"} />
                <p className="link-name">게시판</p>
              </div>
            </Link>
          </div>
          <div className="otherSection">
            <Link to="/main/trash">
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
