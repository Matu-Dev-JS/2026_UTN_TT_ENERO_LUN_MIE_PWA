import React from 'react'
import ToDoList from './Components/ToDoList/ToDoList'
import AddNewTaskForm from './Components/AddNewTaskForm/AddNewTaskForm'
import LastTaskAdded from './Components/LastTaskAdded/LastTaskAdded'
import { ToDoContextProvider } from './Context/ToDoContext'

function App() {
  let titulo = <h1>Hola</h1>
  return (
    <>
      <ToDoContextProvider>
        <div>
          <ToDoList/>
          <AddNewTaskForm/>
        </div>
        <div>
          <LastTaskAdded/>
        </div>
      </ToDoContextProvider>
    </>
  )
}

export default App
