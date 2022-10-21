import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react';
function App() {
  const [tasks, setTask]=useState([{
    id:1,
    name:"lavar los trastes",
    description:"lavar los trastes con agua y jabón ",
    date: "5 de febrero a las 3:pm",
    reminder:true
},
{
    id:2,
    name:"leer un libro",
    description:" leer un libro mientras voy en el camión",
    date: "10 de febrero a las 10:pm",
    reminder:true
},
{
    id:3,
    name:"escribir en mi diario",
    description: "escribir en mi diario todas las mañanas los ueños que hay tenidos, lo más detalladamente que se pueda",
    date: "24 de diciembre 12:am",
    reminder:false
}])

//Delete task
const deleteTask=(id)=>{
setTask(tasks.filter((task)=>task.id!==id))
}

  return (
       <div className="container">
          <Header />
         { tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask}/>:"aún no hay tareas para mostrar"}
       </div>
  )
}

export default App