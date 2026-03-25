import React from 'react'
import { getWorkspaces } from '../../services/workspaceService'

const HomeScreen = () => {

  /* 
  Manejar la respuesta del servidor con useRequest o hook de preferencia
  Representar los estados en la pantalla, en especial el cargando y la lista de espacios de trabajo
  Cada espacio de trabajo debera mostrar el titulo y un link que diga 'abrir workspace' y lleve hacia '/workspace/:id_workspace
  */
  getWorkspaces()
  return (
    <div>HomeScreen</div>
  )
}

export default HomeScreen