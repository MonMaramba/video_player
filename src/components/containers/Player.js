import React, { useState, useEffect } from "react";
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

const Player = ({ match, history, location }) => {
  // takes data from index.html and assigns to videos
  const videos = JSON.parse(document.querySelector('[name="videos"]').value);

  // creating state in a functional component
  const [state, setState] = useState({
    // setting initial values using useState
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    nightMode: true,
    playlistId: videos.playlistId,
    autoplay: false
  });
  // useEffect runs after every render including the first
  // every render has it's own useEffect
  useEffect(() => {
    // activeVideo is passed from parent App.js routing path :activeVideo
    const videoId = match.params.activeVideo;
    // will route back to first video if activeVideo is null or not valid
    if (videoId !== undefined) {
      // this finds the videoId of what's in the videos array
      const newActiveVideo = state.videos.findIndex(
        video => video.id === videoId
      );
      // setting the state to be the current video
      // grabs and spreads previous state to avoid an infinite loop
      setState(prev => ({
        ...prev,
        activeVideo: prev.videos[newActiveVideo],
        autoplay: location.autoplay
      }));
    } else {
      // uses history to set the state to either the last played or the first one if there is no previous state
      history.push({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false
      });
    }
    // the second array parameter to useEffect specifies which state properties to subscribe to. If they don't change, the component will not re-render
  }, [
    history,
    location.autoplay,
    match.params.activeVideo,
    state.activeVideo.id,
    state.videos
  ]);

  const nightModeCallBack = () => {};

  const endCallback = () => {};

  const progressCallback = () => {};

  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      {state.video !== null ? (
        <StyledPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallback={nightModeCallBack}
            nightMode={state.nightMode}
          />
        </StyledPlayer>
      ) : null}
    </ThemeProvider>
    // enclosing the components in a fragment <React.Fragment> shortened to <> and closed with </>
  );
};

export default Player;
