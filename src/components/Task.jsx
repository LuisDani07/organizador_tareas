

function Task({task, onDelete, onToggle}) {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.name} <button className="deleteButton" onClick={()=>onDelete(task.id)}>Eliminar</button></h3>
            <p>{task.date}</p>
    </div>
  )
}

export default Task