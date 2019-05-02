import React from 'react';




const TaskItem = ({ task,toggleCompletion,index,locked }) => {
  let icon;
  if (locked) {
    icon = "/locked.svg"
  } else {
    icon = task.completedAt ? "/completed.svg" : "incomplete.svg"
  }

  return (
    <div className="taskItem">
      <img className="imageIcon" src={icon} alt="Logo" />
      <div className="taskName" onClick={toggleCompletion(index)}>{task.task}</div>
    </div>
  )
}




export default TaskItem;
