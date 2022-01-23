import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  };

  return (
    <div className="App">
      <div className="Header">
        <div className="inputContainer">
          <input 
            type="text" 
            placeholder="Task" 
            name="task"
            onChange={handleChange}
          />
          <input 
            type="number" 
            placeholder="Deadline"
            name="deadline"
          />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
