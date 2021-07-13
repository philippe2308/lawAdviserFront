import Card from "../Card";
import CardAddTask from "../CardAddTask";
import "./styles.css";

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function Sections({ title, idSection, tasksList, setTasksList }) {
  const drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    const auxi = tasksList.filter((value) => "t" + value.id === data)[0];
    upDateTask(auxi.id, auxi.title, auxi.description, ev.target.id);
    ev.target.appendChild(document.getElementById(data));
  };
  const addTask = (title, description) => {
    setTasksList([
      ...tasksList,
      {
        title,
        description,
        section: idSection,
        id: tasksList.length,
      },
    ]);
  };

  const upDateTask = (id, title, description, section) => {
    setTasksList(
      tasksList.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            title,
            description,
            idSection: section,
          };
        }
        return value;
      })
    );
  };

  return (
    <div className="container">
      <div>{title}</div>

      <CardAddTask buttonText={"Add task"} onClickButton={addTask} />
      <div
        id={idSection}
        className="containerDragAndDrop"
        onDrop={(event) => drop(event)}
        onDragOver={(event) => allowDrop(event)}
      >
        {tasksList
          .filter((value) => value.section === idSection)
          .map((value) => (
            <Card
              key={value.id}
              upDateTask={upDateTask}
              title={value.title}
              description={value.description}
              drag={drag}
              id={value.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Sections;
