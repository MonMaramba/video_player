import React from "react";

import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlayistItems";
import NightMode from "../NightMode";

import StyledPlaylist from "../styles/StyledPlaylist";

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => (
  <StyledPlaylist>
    <NightMode nightModeCallback={nightModeCallback} nightmode={nightMode} />
    <PlaylistHeader active={active} to={videos.length} />
    <PlaylistItems videos={videos} active={active} />
  </StyledPlaylist>
);

export default Playlist;
