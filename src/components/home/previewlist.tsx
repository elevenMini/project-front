import styled from "styled-components";
import PreviewMockup from "./previewMockup";

interface PreviewList {
  list?: [];
}

const PreviewContainer = styled.div`
  position: relative;
  margin-top: 20px;
  .preview-list {
    width: 100%;
    height: 100%;
    padding-bottom: 120px;
    padding-top: 16px;
    .list-view-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      height: 100%;
      width: 100%;
    }
  }
`;
const ItemContainer = styled.div`
  width: 20%;
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
  const { list } = props;

  const content = (
    <PreviewContainer>
      <div className="preview-logo">Hi there</div>
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
