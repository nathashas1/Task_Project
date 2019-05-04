import React from 'react';
import TaskItem from './task_item.js';
import TaskGroup from './task_group';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
      showGroup: false,
      allData: this.props.allData,
      groupTasks: {}
    }
      this.handleClick = this.handleClick.bind(this)
      this.isLocked = this.isLocked.bind(this)
      this.renderGroup = this.renderGroup.bind(this)
  }

  componentDidMount(){
    this.isLocked()
  }

    handleClick(i) {
      return (e) => {
        let newTasks = [...this.state.tasks];
        let task = {...this.state.tasks[i]};
        let currentState = task.completedAt;
        if (!(this.state.tasks[i].locked)) {
            if (currentState === null || currentState === false){
              currentState = true

            } else {
              currentState = false
            }
            task.completedAt = currentState
            newTasks[i] = task;
        }
        let id = task.id;
        let newGroup = [...this.state.allData];
        for (let i = 0; i < newGroup.length; i++) {
          if (id === newGroup[i].id) {
            newGroup[i].completedAt =   task.completedAt
          }
        }
          this.setState({tasks: newTasks, allData: newGroup}, () => {
            this.isLocked()
          });
      }
    }


  isLocked(){
    let newGroups = [...this.state.allData];
    newGroups.forEach((group) => {
      let flag = false
      for (let i = 0; i < group.dependencyIds.length; i++) {
        let id = group.dependencyIds[i] - 1
        let currentState = this.state.allData[id].completedAt
        if (currentState === null || currentState === false){
          group.locked = true
          group.completedAt = false
          flag = true
          break;
        }
      }
      if (flag === false){
        group.locked = false
      }
    })
    this.setState({allData: newGroups});
    let newTasks = [...this.state.tasks];
    newTasks.forEach((task) => {
      let taskId = task.id
      let groupId = taskId - 1
      task.locked = this.state.allData[groupId].locked
      task.completedAt = this.state.allData[groupId].completedAt
    })
    this.setState({tasks: newTasks});
  }


    renderGroup(){
        let groups = {}
        for (let i = 0; i < this.state.allData.length; i++) {
            if (groups.hasOwnProperty(this.state.allData[i].group)) {
              groups[this.state.allData[i].group].push(this.state.allData[i]);
            } else {
              groups[this.state.allData[i].group] = [this.state.allData[i]];
            }
        }
        this.setState({ groupTasks: groups, showGroup: true})
    }


  render() {
    const tasks = this.state.tasks.map((task,i) => {
     return (
       <TaskItem
         key={i}
         task={task}
         index={i}
         toggleCompletion={this.handleClick}
         locked={task.locked}
       />
     );
    });
    return(
        this.state.showGroup ?
           <TaskGroup
             allData={this.state.allData}
             groupTasks={this.state.groupTasks}
           /> :
           <div className="tasksPage">
              <div className="leftContainer">
                  <h1>{this.props.group}</h1>
                  <ul className="allTasks">{tasks}</ul>
              </div>
              <div className="link" onClick={this.renderGroup}>ALL GROUPS</div>
            </div>
          )
        }
}
export default Tasks;
