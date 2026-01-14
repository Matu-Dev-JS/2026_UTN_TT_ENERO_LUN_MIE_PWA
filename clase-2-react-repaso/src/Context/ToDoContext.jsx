import { createContext, useState } from "react";

export const ToDoContext = createContext(
    {
        tasksState: [],
        addNewTask: function(title, content){}
    }
)

export function ToDoContextProvider ({children}){
    const [tasksState, setTaskState] = useState([])

    function addNewTask (title, content){
        const new_task = {
            title,
            content,
            id: tasksState.length + 1
        }
        setTaskState(
            (currentTasksState) => {
                return [...currentTasksState, new_task]
            }
        )
    }

    const providerValues = {
        tasksState,
        addNewTask
    }

    return (
        <ToDoContext.Provider value={providerValues}>
            {children}
        </ToDoContext.Provider>
    )
}