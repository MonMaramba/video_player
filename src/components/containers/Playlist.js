import React from "react";

import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlayistItems";
import NightMode from "../NightMode";

const Playlist = props => (
  <>
    <NightMode />
    <PlaylistHeader />
    <PlaylistItems />
  </>
);

export default Playlist;
