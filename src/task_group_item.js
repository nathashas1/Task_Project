import React from 'react';



const TaskGroupItem = ({ group,showTasks,groupTasks }) => {
  let completedTasks = 0
  for (let i = 0; i < groupTasks.length; i++) {
    if (groupTasks[i].completedAt === true) {
      completedTasks += 1
    }
  }
  return (
    <div className="taskItem">
      <img className="imageIcon" src="/group.svg" alt="Logo" />
      <div>
        <div className="taskName" onClick={showTasks(group)}>{group}</div>
        <div className="lightText">{completedTasks} OF {groupTasks.length} TASKS COMPLETE</div>
      </div>
    </div>
  )
}




export default TaskGroupItem;
