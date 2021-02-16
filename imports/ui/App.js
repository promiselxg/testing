import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { TasksCollection } from "/imports/api/TasksCollection";
import Task from "./Task";
import TaskForm from "./TaskForm";

const toggleChecked = ({ _id, isChecked }) => {
  TasksCollection.update(_id, {
    $set: {
      isChecked: !isChecked,
    },
  });
};

export const App = () => {
  const tasks = useTracker(() =>
    TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <TaskForm />
      {tasks.map((task) => (
        <Task task={task} key={task._id} onCheckboxClick={toggleChecked} />
      ))}
    </div>
  );
};
