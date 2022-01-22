import React, {FC} from 'react';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <div className="Header">
        <div className="inputContainer">
          <input type="text" placeholder="Task" />
          <input type="number" placeholder="Deadline" />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
