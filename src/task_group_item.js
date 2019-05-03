import React from 'react';

const TaskGroupItem = ({ group,showTasks,groupTasks }) => {
  let completedTasks = 0
  for (let i = 0; i < groupTasks.length; i++) {
    if (groupTasks[i].completedAt === true) {
      completedTasks += 1
    }
  }
  return (
    <div className="taskGroupItem">
      <img className="imageIcon" src="/group.svg" alt="Logo" onClick={showTasks(group)}/>
      <div>
        <div className="taskGroupName" onClick={showTasks(group)}>{group}</div>
        <div className="taskGroupName"  style={{color:"#AEAEAE"}} onClick={showTasks(group)}>{completedTasks} OF {groupTasks.length} TASKS COMPLETE</div>
      </div>
    </div>
  )
}




export default TaskGroupItem;
