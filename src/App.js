import "./App.css";
import ToDoList from "./screen/ToDoList";
import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const [tasksList, setTasksList] = useState([
    {
      id: 0,
      title: "task 1",
      description: "teste",
      section: 0,
      idSection: 0,
    },
  ]);
  const sections = ["To do", "Doing", "Done"];
  return (
    <div>
      <ToDoList
        sections={sections}
        tasksList={tasksList}
        setTasksList={setTasksList}
      />

      {tasksList.map((value) => (
        <Card
          key={"cl" + value.id}
          title={value.title}
          description={value.description}
          id={value.id}
          section={sections[value.idSection]}
        />
      ))}
    </div>
  );
}

export default App;
