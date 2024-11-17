import React, { useState } from 'react';

const TaskForm = ({ addTask, selectedDate }) => {
  const [taskName, setTaskName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() && startTime && endTime) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        date: selectedDate,
        startTime,
        endTime,
        completed: false
      };
      addTask(newTask);
      setTaskName('');
      setStartTime('');
      setEndTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
       className="taskForm"
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a task"
      />
      <div className="time">
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          placeholder="Start Time"
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          placeholder="End Time"
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
