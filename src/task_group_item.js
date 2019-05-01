import React from 'react';



const TaskGroupItem = ({ group,showTasks }) => {
  return (
    <div onClick={showTasks(group)}>{group}</div>
  )
}




export default TaskGroupItem;
