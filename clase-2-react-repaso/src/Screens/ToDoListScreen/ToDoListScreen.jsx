import React from 'react'
import { ToDoContextProvider } from '../../Context/ToDoContext'
import ToDoList from '../../Components/ToDoList/ToDoList'
import AddNewTaskForm from '../../Components/AddNewTaskForm/AddNewTaskForm'
import LastTaskAdded from '../../Components/LastTaskAdded/LastTaskAdded'


const ToDoListScreen = () => {
    return (
        <div>
            <ToDoContextProvider>
                <div>
                    <ToDoList />
                    <AddNewTaskForm />
                </div>
                <div>
                    <LastTaskAdded />
                </div>
            </ToDoContextProvider>
        </div>
    )
}

export default ToDoListScreen