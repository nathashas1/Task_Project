import React from 'react';



const TaskGroupItem = ({ group,showTasks }) => {
  return (
    <div className="taskItem">
      <img className="imageIcon" src="/group.svg" alt="Logo" />
      <div className="taskName" onClick={showTasks(group)}>{group}</div>
    </div>
  )
}




export default TaskGroupItem;
