import React from "react";
// for uniform themes across the whole app passing it as a prop
import { ThemeProvider } from "styled-components";
import StyledPlayer from "../styles/StyledPlayer";

import Video from "../Video";
import Playlist from "../containers/Playlist";

// creating the theme(just a regular js object)
const theme = {
  bgcolor: "#353535",
  bgcolorItem: "#414141",
  bgcolorItemActive: "#405c63",
  bgcolorPlayed: "#526d4e",
  border: "none",
  borderPlayed: "none",
  color: "fff"
};
const themeLight = {
  bgcolor: "#fff",
  bgcolorItem: "#fff",
  bgcolorItemActive: "#80a7b1",
  bgcolorPlayed: "#7d9979",
  border: "none",
  borderPlayed: "none",
  color: "#353535"
};

const Player = props => {
  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      <StyledPlayer>
        <Video />
        <Playlist />
      </StyledPlayer>
    </ThemeProvider>
    // enclosing the components in a fragment <React.Fragment> shortened to <> and closed with </>
  );
};

export default Player;
