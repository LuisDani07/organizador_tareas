import {useState} from 'react';


function AddTask({onAdd}) {
const [name, setName]=useState('')
const [date, setDate]=useState('')
const [reminder, setReminder]=useState(false)


const onSubmit=(e)=>{
    e.preventDefault()
    if(!name){
        alert("Por favor agregue una tarea")
        return
    }
    onAdd({name, date, reminder})
    setName('')
    setDate('')
    setReminder(false)
}

  return (
    <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
            <label >Tarea</label>
            <input type="text" placeholder="Añade tu tarea" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="form-control">
            <label >Día y Hora</label>
            <input type="text" placeholder="Añade el día y la hora" value={date} onChange={(e)=>setDate(e.target.value)}/>
          </div>
          <div className="form-control form-control-check">
            <label >recordatorio</label>
            <input checked={reminder} type="checkbox" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
          </div>
          <input type="submit"  value="guardar tarea" className="btn btn-block" />
    </form>
  )
}

export default AddTask