import React from "react";

import PlaylistItem from "../PlaylistIem";
import withLink from "../hoc/withLink";

import StyledPlaylistItems from "../styles/StyledPlaylistItems";

// this will give a boosted component that will have the link to the video
const PlaylistItemWithLink = withLink(PlaylistItem);

const Playlistitems = ({ videos, active }) => (
  <StyledPlaylistItems>
    {videos.map(video => (
      <PlaylistItemWithLink
        key={video.id}
        video={video}
        active={video.id === active.id ? true : false}
        played={video.played}
      />
    ))}
  </StyledPlaylistItems>
);

export default Playlistitems;
