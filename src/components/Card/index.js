import React, { useState } from "react";
import CardAddTask from "../CardAddTask";
import "./styles.css";

function Card({ id, title, description, drag, upDateTask, section }) {
  const [edit, setEdit] = useState(false);

  if (edit) {
    return (
      <CardAddTask
        initialTitle={title}
        initialDescription={description}
        buttonText={"Save changes"}
        onClickButton={(newTitle, newDescription) => {
          upDateTask(id, newTitle, newDescription, section);
          setEdit(false);
        }}
      />
    );
  }
  return (
    <div
      className="cardTask"
      id={"t" + id}
      draggable="true"
      onDragStart={(event) => drag(event)}
      width="336"
      height="69"
    >
      <div>Title: {title}</div>
      <div>Description: {description}</div>
      {section && <div>Section: {section}</div>}

      {upDateTask && <button onClick={() => setEdit(true)}>Edit task</button>}
    </div>
  );
}

export default Card;
