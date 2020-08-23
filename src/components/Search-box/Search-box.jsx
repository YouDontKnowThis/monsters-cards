import React from "react";
import classes from "./Search.module.css";

const searchBox = (props) => {
  return (
    <>
      <form className={classes.Search}>
        <input
          type="search"
          placeholder="Search Monsters"
          onChange={props.change}
        />
      </form>
    </>
  );
};

export default searchBox;
