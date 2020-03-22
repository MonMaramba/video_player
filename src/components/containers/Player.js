import React from "react";

import Video from "../Video";
import Playlist from "../containers/Playlist";

const Player = props => {
  return (
    // enclosing the components in a fragment <React.Fragment> shortened to <> and closed with </>
    <>
      <Video />
      <Playlist />
    </>
  );
};

export default Player;
