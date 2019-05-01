import React, { Component } from 'react'
import './App.css'
import TaskGroup from './task_group.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Things To Do</h1>
        < TaskGroup />
      </div>
    )
  }
}
