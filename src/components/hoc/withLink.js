// A Higher Order Component is a component that takes in a different component as a parameter or returns a different component or both.
// Always return a new component and never a modified version of another
import React from "react";
import { Link } from "react-router-dom";

const withLink = WrappedComponent => props => {
  const newProps = {
    ...props,
    video: {
      ...props.video,
      title: (
        <Link to={{ pathname: `${props.video.id}`, autoplay: true }}>
          {props.video.title}
        </Link>
      )
    }
  };
  return <WrappedComponent {...newProps} />;
};
export default withLink;
