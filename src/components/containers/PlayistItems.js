import React from "react";

import PlaylistItem from "../PlaylistIem";

import StyledPlaylistItems from "../styles/StyledPlaylistItems";

const Playlistitems = ({ videos, active }) => (
  <StyledPlaylistItems>
    {videos.map(video => (
      <PlaylistItem
        key={video.id}
        video={video}
        active={video.id === active.id ? true : false}
        played={video.played}
      />
    ))}
  </StyledPlaylistItems>
);

export default Playlistitems;
