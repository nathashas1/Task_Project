import React from 'react';
import Tasks from './tasks';
import TaskGroupItem from './task_group_item.js';

class TaskGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: {},
      showGroup: true,
      showTasks: false,
      selectedGroup: "",
      allData:""
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    let taskGroups = {}
    let allData;
    fetch('http://localhost:3000/data.json')
      .then(response => response.json())
        .then(function(data){
          allData = data;
          for (var i = 0; i < data.length; i++) {
             if (taskGroups.hasOwnProperty(data[i].group)) {
               taskGroups[data[i].group].push(data[i]);
             } else {
               taskGroups[data[i].group] = [data[i]];
             }
           }
         })
      .then(() => this.setState({ groups: taskGroups,allData: allData}))
    }

  handleClick(group) {
    return (e) => {
      this.setState({
        showGroup: false,
        showTasks: true,
        tasks: this.state.groups[group],
        selectedGroup: group
      })
    };
  }


  render() {
       const groups = Object.keys(this.state.groups).map((group,i) => {
        return (
          <TaskGroupItem
            key={i}
            group={group}
            showTasks={this.handleClick}
          />
        );
      });
      if (this.state.showTasks) {
          return (
             <Tasks tasks={this.state.tasks}
             group={this.state.selectedGroup}
             allgroups={this.state.allData}/>
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
