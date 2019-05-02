import React from 'react';
import TaskItem from './task_item.js';
import TaskGroup from './task_group';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
      showGroup: false,
      groupName: this.props.group,
      allgroups: this.props.allgroups
    }
      this.handleClick = this.handleClick.bind(this)
      this.isLocked = this.isLocked.bind(this)
      this.hasDependency = this.hasDependency.bind(this)
      this.renderGroup = this.renderGroup.bind(this)
      console.log(this.state.allgroups)
  }




  componentDidMount(){
    // let newTasks = [...this.state.tasks];
    // newTasks.forEach((task,i) => {
    //   task.locked = this.hasDependency(i)
    // })
    // this.setState({tasks: newTasks})

this.isLocked()

  }


    handleClick(i) {
      return (e) => {
        let newTasks = [...this.state.tasks];
        let task = {...this.state.tasks[i]};
        let currentState = task.completedAt;
        if (!(this.state.tasks[i].locked)) {
            console.log("in if")
            if (currentState === null || currentState === false){
              currentState = true

            } else {
              currentState = false
            }
            task.completedAt = currentState

            console.log(task)
            newTasks[i] = task;
            console.log(newTasks)

        }
        let id = task.id;
        let newGroup = [...this.state.allgroups];
        for (let i = 0; i < newGroup.length; i++) {
          if (id === newGroup[i].id) {
            newGroup[i].completedAt =   task.completedAt
          }
        }

          this.setState({tasks: newTasks, allgroups: newGroup}, () => {
            this.isLocked()
          });

      }
    }


  //   isLocked(){
  //     let newTasks = [...this.state.tasks];
  //     newTasks.forEach((task) => {
  //       let flag = false
  //       for (var i = 0; i < task.dependencyIds.length; i++) {
  //         let id = task.dependencyIds[i] - 1
  //         let currentState = this.state.tasks[id].completedAt
  //         if (currentState === null || currentState === false){
  //           task.locked = true
  //           task.completedAt = false
  //           flag = true
  //           break;
  //         }
  //       }
  //       if (flag === false && task.dependencyIds.length > 0){
  //         task.locked = false
  //       }
  //     })
  //
  //     this.setState({tasks: newTasks});
  // }

  isLocked(){
    let newGroups = [...this.state.allgroups];
    newGroups.forEach((group) => {
      let flag = false
      for (let i = 0; i < group.dependencyIds.length; i++) {
        let id = group.dependencyIds[i] - 1
        let currentState = this.state.allgroups[id].completedAt
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
    console.log("newfgroup",newGroups)
    this.setState({allgroups: newGroups});

    let newTasks = [...this.state.tasks];
        newTasks.forEach((task) => {
            let taskId = task.id
            let groupId = taskId - 1
              task.locked = this.state.allgroups[groupId].locked
              task.completedAt = this.state.allgroups[groupId].completedAt
            })
              this.setState({tasks: newTasks});
          }








    // hasDependency(index){
    //     let task = this.state.tasks[index]
    //     if (task.dependencyIds.length === 0) return false;
    //     for (var i = 0; i < task.dependencyIds.length; i++) {
    //       let id = task.dependencyIds[i]
    //       let currentState = this.state.tasks[id].completedAt
    //       if (currentState === null || currentState === false){
    //         return true
    //       }
    //   }
    //   return false
    // }


    hasDependency(index){
        let group = this.state.allgroups[index]
        console.log(group)
        if (group.dependencyIds.length === 0) return false;
        for (var i = 0; i < group.dependencyIds.length; i++) {
          let id = group.dependencyIds[i]
          let currentState = this.state.group[id].completedAt
          if (currentState === null || currentState === false){
            return true
          }
      }
      return false
    }

    renderGroup(){
    // carefull!!! bar is undefined. Look more what 'this' means in javascript
    this.setState({
     showGroup: true,
   });
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
           <TaskGroup /> :
           <div className="taskItempage">
              <div className="groupContent">
                  <h1>{this.props.group}</h1>
                  <ul className="allTasks">{tasks}</ul>
              </div>
              <div className="link" onClick={this.renderGroup}>ALL GROUPS</div>
            </div>
          )
        }
}
export default Tasks;
