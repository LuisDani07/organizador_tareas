import {FaTimes} from 'react-icons/fa'

function Task({task, onDelete, onToggle}) {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.name} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete(task.id)}></FaTimes></h3>
            <p>{task.date}</p>
    </div>
  )
}

export default Task