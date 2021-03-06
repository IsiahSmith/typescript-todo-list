import React from 'react';
import {ITask} from "../interfaces";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}


const TodoTask = ({task, completeTask}: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline} Days</span>
                <span>{task.notes}</span>
                <span>{task.firstName}'s Task</span>
            </div>
            <button 
                onClick={() => {completeTask(task.taskName);}}>DELETE</button>
        </div>
    );
};

export default TodoTask;