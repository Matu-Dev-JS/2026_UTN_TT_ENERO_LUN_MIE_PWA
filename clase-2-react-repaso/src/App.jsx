import React from 'react'
import ToDoList from './Components/ToDoList/ToDoList'
import AddNewTaskForm from './Components/AddNewTaskForm/AddNewTaskForm'
import LastTaskAdded from './Components/LastTaskAdded/LastTaskAdded'
import { ToDoContextProvider } from './Context/ToDoContext'
import { Route, Routes } from 'react-router'
import ToDoListScreen from './Screens/ToDoListScreen/ToDoListScreen'

function App() {
  let titulo = <h1>Hola</h1>
  return (
    <>
      <Routes>
        <Route path='/tasks' element={<ToDoListScreen/>}/>
        <Route path='/' element={<h1>Bienvenido</h1>}/>
      </Routes>
      
    </>
  )
}

export default App

/* 
Vamos a crear un sidebar similar al de vsc
  El sidebar usara el estado de collection para guardar que carpetas o archivos se fueron creando
  El sidebar debera tener encima un form con el campo para agregar un nuevo archivo o carpeta
  Deben haber 2 botones de enviar (el de archivo y el de carpeta)
  Si crean una carpeta debera guardarse en el estado de collection
    {
      id: ,
      type: 'folder',
      name: 'nombre de la carpeta',
      files: []
    }
  Si crean un archivo debera guardarse en el estado de collection
    {
      id: ,
      type: 'file',
      name: 'nombre del archivo',
      files: null
    }
  Por el momento no son necesarias validaciones sobre el campo, vamos a suponer que el usuario usa bien la app

  El sidebar tambien debera listar el estado de collection debajo del form (idealmente en otro componente) y debera marcar si es una carpeta o un archivo, pueden hacerlo con iconos: 📁, 📄

Coinsideraciones:
  - Usar context para manejar el estado de collection
  - Dividir en componentes el sidebar por funcionalidad
  - Usar estados para guardar el estado del sidebar
*/
