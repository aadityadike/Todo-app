import { RiCloseCircleLine } from 'react-icons/ri'

const ShowTask = ({ todo, deleteTask, activeTask }) => {
    return (
        <div className={`showTask ${todo.active ? "active" : ""}`} onDoubleClick={() => {
            activeTask(todo.id)
        }}>

            <h3>
                {todo.text} {" "}
                <RiCloseCircleLine onClick={() => deleteTask(todo.id)} />
            </h3>
            <p>{todo.day}</p>
        </div>
    )
}

export default ShowTask