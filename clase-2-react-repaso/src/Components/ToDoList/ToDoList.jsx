import React, { useContext } from 'react'
import { ToDoContext } from '../../Context/ToDoContext'

const ToDoList = () => {
    const {tasksState} = useContext(ToDoContext)
  return (
    <div>
        {
            tasksState.length === 0 
            ? <h2>No hay tareas aun</h2>
            : tasksState.map( (task) => {
                return (
                    <div key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.content}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ToDoList