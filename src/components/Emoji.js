import React from "react";

export const Emoji = (props) => {
  return (
    <div>
      <p>{props.emoji.title}</p>
      <div>{props.emoji.symbol}</div>
    </div>
  );
};
