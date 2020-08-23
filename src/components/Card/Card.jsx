import React from "react";
import classes from "./Card.module.css";

const card = (props) => {
  return (
    <div className={classes.Card}>
      <h3>{props.monster.name}</h3>
      <img
        src={`https://robohash.org/${props.monster.id}?set=set1`}
        alt={props.monster.name}
      />
      <p>{props.monster.email}</p>
    </div>
  );
};

export default card;
