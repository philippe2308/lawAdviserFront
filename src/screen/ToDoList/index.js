import Sections from "../../components/Sections";
import Card from "../../components/Card";

function ToDoList({ sections, tasksList, setTasksList }) {
  const addTask = (title, description, sectionId) => {
    setTasksList([
      ...tasksList,
      {
        title: title,
        description: description,
        section: sectionId,
      },
    ]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
      {sections.map((value, index) => (
        <Sections
          key={"s" + index}
          title={value}
          idSection={index}
          tasksList={tasksList}
          setTasksList={setTasksList}
        ></Sections>
      ))}
    </div>
  );
}

export default ToDoList;
