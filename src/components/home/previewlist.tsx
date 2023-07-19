import styled from "styled-components";
import PreviewMockup from "./previewMockup";
import { ThemeProps } from "@/style/theme";
import { PreviewContainer, ItemContainer } from "@/style/main/home";

interface PreviewList {
  list?: [];
  title: string;
}

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
