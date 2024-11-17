import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substring(0, 10));

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks
  .filter(task => task.date === selectedDate)
  .sort((a, b) => a.startTime.localeCompare(b.startTime)); 

  return (
    <div className="App">
      <h1>Day Planner</h1>
      <TaskFilter selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
      <TaskForm addTask={addTask} selectedDate={selectedDate} />
    </div>
  );
}

export default App;
