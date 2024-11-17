import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div className="timeline">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default TaskList;
