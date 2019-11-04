import React from "react";
import Hog from "./Hog";

const Hogs = ({ hogs }) => {
  const renderHogs = () => hogs.map((hog, i) => <Hog key={i} {...hog} />);

  return <ul className="ui three stackable cards">{renderHogs()}</ul>;
};

export default Hogs;
