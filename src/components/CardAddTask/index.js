import React, { useState } from "react";
import "./styles.css";

function CardAddTask({
  initialTitle,
  initialDescription,
  onClickButton,
  buttonText,
}) {
  const [title, setTitle] = useState(initialTitle ? initialTitle : "");
  const [description, setDescription] = useState(
    initialDescription ? initialDescription : ""
  );

  return (
    <div className="cardAddTask" width="336" height="69">
      <div>
        Title:
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
      </div>
      <div>
        Description:
        <input
          type="text"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
      </div>
      <button onClick={() => onClickButton(title, description)}>
        {buttonText}
      </button>
    </div>
  );
}

export default CardAddTask;
