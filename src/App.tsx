import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import {ITask} from './interfaces';
import TodoTask from "./Components/TodoTask";

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [notes, setNotes] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  // Updates task values to inputted entries
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else if (event.target.name === "deadline") {
      setDeadline(Number(event.target.value))
    } else {
      setNotes(event.target.value)
    }
  };

  // Sets new task to input fields on "Add Task" button click
  // Also empties input fields
  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline, notes: notes};
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
    setNotes("");
  };

  // Removes task from list on "X" button click
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  }

  return (
    <div className="App">
      <div className="Header">
        <div className="inputContainer">
          <input 
            type="text" 
            placeholder="Task" 
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input 
            type="number" 
            placeholder="Deadline (days)"
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
          <input 
            type="text" 
            placeholder="Notes"
            name="notes"
            value={notes}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>;
        })}
      </div>
    </div>
  );
}

export default App;
