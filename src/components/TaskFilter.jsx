import React from 'react';

const TaskFilter = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="TaskFilter">
      <label>Select Date: </label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
  );
};

export default TaskFilter;
