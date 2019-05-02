import React from 'react';
import Tasks from './tasks';
import TaskGroupItem from './task_group_item.js';

class TaskGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      groups: {},
      showGroup: true,
      showTasks: false,
      selectedGroup: "",
      allData: [],
    }
    this.handleClick = this.handleClick.bind(this)
    console.log("prop",this.props)
  }

  handleClick(group) {
    return (e) => {
      this.setState({
        showGroup: false,
        showTasks: true,
        tasks: this.props.groups[group],
        selectedGroup: group
      })
    };
  }



  render() {
      let groups;
      console.log("render",this.props);
      if (this.props.groups){
        groups = Object.keys(this.props.groups).map((group,i) => {
        return (
          <TaskGroupItem
            key={i}
            group={group}
            showTasks={this.handleClick}
            groupTasks={this.props.groups[group]}
          />
        );
      });
    }
      if (this.state.showTasks) {
          return (
             <Tasks tasks={this.state.tasks}
             group={this.state.selectedGroup}
             allgroups={this.props.allData}/>
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
