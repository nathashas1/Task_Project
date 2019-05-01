import React from 'react';
import TaskItem from './task_item.js';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks
    }
      this.handleClick = this.handleClick.bind(this)
    console.log(this.state.tasks)
  }

  handleClick(task,i) {
    var data = this.state.tasks;
    console.log(i)
    };


  render() {
    const tasks = this.props.tasks.map((task,i) => {
     return (
       <TaskItem
         key={i}
         task={task.task}
       />
     );
    });
    return(
      <ul>{tasks}</ul>
    )    
  }




}
export default Tasks;
