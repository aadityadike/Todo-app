import React from 'react'
import ShowTask from './ShowTask'

const Tasks = ({ toDos, deleteTask, activeTask }) => {
    return (
        <div>
            {toDos.map((task) => (
                <ShowTask
                    key={task.id}
                    todo={task}
                    deleteTask={deleteTask}
                    activeTask={activeTask}
                />
            ))}
        </div>
    )
}

export default Tasks