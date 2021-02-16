import React from "react";

const Task = ({ task, onCheckboxClick }) => {
  return (
    <div>
      <li>
        <input
          type='checkbox'
          checked={!!task.isChecked}
          onClick={() => onCheckboxClick(task)}
          readOnly
        />
        <span>{task.text}</span>
      </li>
    </div>
  );
};

export default Task;
