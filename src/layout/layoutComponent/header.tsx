import { menu, setting } from "@/assets/icon/icons";
import { useAppDispatch } from "@/hooks/useRedux";
import { userSet } from "@/store/slice/userSlice";
import { Button } from "@/util";
import Icon from "@/util/icon";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 72px;
  background-color: #fff;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.11);
  padding: 0 20px;

  .header-wrraper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left-wrraper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    a {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 1.2rem;
      transition: color 0.2s;
      &:hover {
        color: aqua;
      }
    }
  }
  .center-wrraper {
    flex-flow: 1;
  }
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .logo-tag {
      color: black;
    }
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: auto;
    font-size: 15px;
    padding: 12px;
    border-radius: 5px;
    background-color: #fff;
    transition: background-color 0.2s;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
  .right-wrraper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .btn-p {
    font-size: 12px;
    &:hover {
      color: #000;
    }
  }
`;
export const Avatar = styled.div`
  max-width: 40px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: gray;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface HeaderProps {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { setSidebar } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <HeaderContainer>
      <div className="header-wrraper">
        <div className="left-wrraper">
          <div className="icon-container">
            <Icon
              src={menu}
              alt="asd"
              className={"icon"}
              onClick={() => {
                setSidebar((prev) => !prev);
              }}
            />
          </div>
          <div className="logo">
            <a className="logo-tag">11조 프로젝트</a>
          </div>
        </div>
        <div className="center-wrraper"></div>
        <div className="right-wrraper">
          <div className="icon-container">
            <Icon src={setting} alt="asd" className={"icon"} />
          </div>
          <div className="addpicture-btn">
            <Button
              color="custom"
              size="small"
              title={<p className="btn-p">이미지업로드</p>}
              onClick={() => navigate("/gallery/upload")}
            />
          </div>
          <Avatar
            onClick={() => {
              dispatch(userSet({ id: null, nickname: null, token: null }));
            }}
          >
            {/* <img src="" alt="asd" className="avatar" /> */}
          </Avatar>
        </div>
      </div>
    </HeaderContainer>
  );
};
export default Header;
