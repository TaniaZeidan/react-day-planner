import React from 'react';

const Task = ({ task, updateTask, deleteTask }) => {
  const toggleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };
  return (
    <div className={`task-block ${task.completed ? 'completed' : ''}`}>
      <div className="task-block-content">
        <div className="task-info">
          <input  type="checkbox" checked={task.completed} onChange={toggleComplete} />
          <span className={task.completed ? 'completed' : ''}>
            {task.name} - {task.startTime} till {task.endTime}
          </span>
        </div>
        <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
