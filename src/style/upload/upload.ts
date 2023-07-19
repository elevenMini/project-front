import styled from "styled-components";

const UploadContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  .uploaddiv {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 20px;
  }
  .pictureContainer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-flow: 1;
    width: 100%;
    min-height: 500px;
    border: 1px dashed gray;
    border-radius: 10px;
    /* background-color: #000; */
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .delbtn {
      position: absolute;
      top: 0;
      right: 0;
      margin: 10px;
    }
  }
  .pictureContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-flow: 1;
    width: 100%;
    height: 100%;
  }
`;

export { UploadContainer };
