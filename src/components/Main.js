import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadLinkThunk } from "../actions/action";
import LinkBox from "./LinkBox";
import "./Main.css";

const Main = (props) => {
  const [search, setSearch] = useState("");
  const linkList = useSelector((state) => state.linkStore.linkList);

  const updateSearchBox = (e) => {
    setSearch(e.target.value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLinkThunk());
    return () => {};
  }, []);

  return (
    <div className="main">
      <h2>Links for React</h2>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          updateSearchBox(e);
        }}
      />
      <div className="linksContainer">
        {linkList
          .filter((link) => {
            return [link.name, ...link.tags]
              .map((word) => {
                return word.toLowerCase();
              })
              .some((tag) => {
                return tag.includes(search.toLowerCase());
              });
          })
          .map((link) => (
            <LinkBox
              key={link.id}
              tags={link.tags}
              url={link.url}
              name={link.name}
            />
          ))}
      </div>
    </div>
  );
};

export default Main;
