import './App.css'
import React from 'react';
import TaskGroup from './task_group.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      allData:[],
      groups: {}
     }
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



    render() {
        return (
          <div>
            <TaskGroup allData={this.state.allData}
            groupTasks={this.state.groups}
            />
          </div>
        )
      }

    }

    export default App;
