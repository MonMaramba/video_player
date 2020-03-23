import styled from "styled-components";

const StyledPlaylist = styled.div`
  -webkit-box-flex: 1;
  flex: 1 1 450px;
  overflow: hidden;
  color: white;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: block;
  }
`;

export default StyledPlaylist;
