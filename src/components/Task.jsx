

function Task({task, onDelete}) {
  return (
    <div className="task">
            <h3>{task.name} <button className="deleteButton" onClick={()=>onDelete(task.id)}>Eliminar</button></h3>
            <p>{task.date}</p>
    </div>
  )
}

export default Task