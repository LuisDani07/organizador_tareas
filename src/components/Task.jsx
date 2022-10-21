

function Task({task}) {
  return (
    <div className="task">
            <h3>{task.name} <button className="deleteButton">Eliminar</button></h3>
            <p>{task.date}</p>
    </div>
  )
}

export default Task