import React, { Component } from 'react'
import './App.css'
import TaskGroup from './task_group.js'

export default class App extends Component {
  render() {
    return (
      <div>
        < TaskGroup />
      </div>
    )
  }
}


// import React from 'react';
//
// import TaskGroup from './task_group.js'
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       allData:"j",
//       groups: {}
//     }
//   }
//
//   componentDidMount(){
//     console.log("here")
//     let taskGroups = {}
//     let allData;
//     fetch('http://localhost:3000/data.json')
//       .then(response => response.json())
//         .then(function(data){
//           allData = data;
//           for (var i = 0; i < data.length; i++) {
//              if (taskGroups.hasOwnProperty(data[i].group)) {
//                taskGroups[data[i].group].push(data[i]);
//              } else {
//                taskGroups[data[i].group] = [data[i]];
//              }
//            }
//          })
//       .then(() => this.setState({ groups: taskGroups,allData: allData}))
//     }
//
//     render() {
//         return (
//           <div>
//             <TaskGroup allData={this.state.allData}
//             groups={this.state.groups}/>
//           </div>
//         )
//       }
//     }
//
//     export default App;
