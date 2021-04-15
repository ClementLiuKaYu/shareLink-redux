import React from "react";
import AddLink from "./AddLink";
import "./LeftNav.css";

const LeftNav = (props) => {
  return (
    <div className="leftNav">
      <div>
        <h3>Salty Cactus</h3>
        <AddLink buttonLabel="Add Link" />
      </div>
    </div>
  );
};

export default LeftNav;
