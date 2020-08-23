import React from "react";
import classes from "./List.module.css";
import Card from "../Card/Card";

const list = (props) => {
  return (
    <div className={classes.List}>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default list;
