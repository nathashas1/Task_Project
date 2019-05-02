import React from 'react';

const TaskItem = ({ task,toggleCompletion,index,locked }) => {
  let icon;
  let taskName;
  if (locked) {
    icon = "/locked.svg"
  } else {
    icon = task.completedAt ? "/completed.svg" : "incomplete.svg"
  }
  if (task.completedAt) {
    taskName = "taskComplete"
  } else {
    taskName = "taskIncomplete"
  }

  return (
    <div className="taskItem">
      <img className="imageIcon" src={icon} alt="Logo" onClick={toggleCompletion(index)}/>
      <div className={taskName} onClick={toggleCompletion(index)}>{task.task}</div>
    </div>
  )
}




export default TaskItem;
