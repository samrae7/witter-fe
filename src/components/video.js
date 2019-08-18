import React from "react";

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div
    style={{
      marginTop: 0,
      marginRight: `20px`,
      marginBottom: `1em`,
      marginLeft: `20px`,
      backgroundColor: `black`,
    }}
  >
    <iframe
      style={{
        display: `block`,
        margin: `auto`,
      }}
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);

export default Video;
