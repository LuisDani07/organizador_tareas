import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
import {useState} from 'react';
function App() {
  const [showAddTask, setShowAddTask]=useState(false)
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
//Toggle Reminder

const toggleReminder=(id)=>{
  setTask(tasks.map((task)=>task.id===id
  ?{...task, reminder:!task.reminder}:task))
}

//Add task

const addTask=(task)=>{
const id=tasks.length+1
const newTask={id, ...task}
setTask([...tasks, newTask])
}

//add form
const onAddForm=()=>{
  setShowAddTask(!showAddTask)
}

  return (
       <div className="container">
          <Header onAddForm={onAddForm}/>
          {showAddTask &&<AddTask onAdd={addTask}/>}
         { tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:"aún no hay tareas para mostrar"}
       </div>
  )
}

export default App