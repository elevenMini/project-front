import styled from "styled-components";
import PreviewMockup from "./previewMockup";
import { ThemeProps } from "@/style/theme";

interface PreviewList {
  list?: [];
  title: string;
}

const PreviewContainer = styled.div`
  position: relative;
  margin-top: 10px;
  .preview-list {
    width: 100%;
    height: 100%;
    padding-bottom: 60px;
    padding-top: 16px;
    .list-view-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;
const ItemContainer = styled.div<ThemeProps>`
  width: 20%;
  @media ${(props) => props.theme.size.large} {
    width: 25%;
  }
  @media ${(props) => props.theme.size.small} {
    width: 33%;
  }
  min-width: 200px;
  padding: 5px;
  .item-wrraper {
    display: flex;
    flex-direction: column;
    .item-img-container {
      background-color: #eee;
      border-radius: 8px;
      box-sizing: border-box;
      overflow: hidden;
      padding-top: 75%;
      position: relative;
      width: 100%;
    }
    .item-title-container {
      flex: 0;
      max-width: 100%;
      text-overflow: ellipsis;

      .title {
        font-weight: 600;
        text-align: start;
        font-size: 1.1rem;
        line-height: 2.2rem;
      }
    }
  }
`;
const Previewlist: React.FC<PreviewList> = (props) => {
  const { list, title } = props;

  const content = (
    <PreviewContainer>
      <div className="preview-logo">{title}</div>
      <div className="preview-list">
        <div className="list-view-container">
          {list ? (
            list.map((e) => (
              <ItemContainer>
                <div className="item-wrraper">
                  <div className="item-img-container"></div>
                  <div className="item-title-container">
                    <p className="title">logo</p>
                  </div>
                </div>
              </ItemContainer>
            ))
          ) : (
            <>
              <PreviewMockup />
            </>
          )}
        </div>
      </div>
    </PreviewContainer>
  );

  return content;
};
export default Previewlist;
