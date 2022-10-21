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

  return (
       <div className="container">
          <Header />
          <Tasks tasks={tasks}/>
       </div>
  )
}

export default App