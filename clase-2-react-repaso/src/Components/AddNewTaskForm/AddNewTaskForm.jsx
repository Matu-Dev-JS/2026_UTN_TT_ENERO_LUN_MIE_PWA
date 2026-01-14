import React, { useContext } from 'react'
import { ToDoContext } from '../../Context/ToDoContext'

const AddNewTaskForm = () => {

    const {addNewTask} = useContext(ToDoContext)
    function onSubmitTask (event){
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const content = form.content.value
        addNewTask(title, content)

    }
  return (
    <form onSubmit={onSubmitTask}>
        <div>
            <label htmlFor='title'>Titulo:</label>
            <input id='title' name='title'  />
        </div>
        <div>
            <label htmlFor="content">Contenido: </label>
            <textarea id='content' name='content'></textarea>
        </div>
        <button>Enviar</button>
    </form>
  )
}

export default AddNewTaskForm