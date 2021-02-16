import React, { useState } from "react";
import { TasksCollection } from "/imports/api/TasksCollection";

const TaskForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    TasksCollection.insert({
      text: text.trim(),
      createdAt: new Date(),
    });
    setText("");
  };
  return (
    <div>
      <form className='task-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Type to add new tasks'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type='submit'>Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
