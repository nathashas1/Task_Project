import React from 'react';
import Tasks from './tasks';
import TaskGroupItem from './task_group_item.js';

class TaskGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      showGroup: true,
      showTasks: false,
      selectedGroup: "",
    }
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(group) {
    return (e) => {
      this.setState({
        showGroup: false,
        showTasks: true,
        selectedGroup: group
      })
    };
  }


  render() {
      let groups;
      if (this.props.groupTasks){
        groups = Object.keys(this.props.groupTasks).map((group,i) => {
        return (
          <TaskGroupItem
            key={i}
            group={group}
            showTasks={this.handleClick}
            groupTasks={this.props.groupTasks[group]}
          />
        );
      });
    }
      if (this.state.showTasks) {
          return (
             <Tasks tasks={this.props.groupTasks[this.state.selectedGroup]}
             group={this.state.selectedGroup}
             allData={this.props.allData}/>
           )
         } else {
           return (
             <div>
               <h1>Things To Do</h1>
               <ul>{groups}</ul>
             </div>
           )
         }
       }

}
export default TaskGroup;
