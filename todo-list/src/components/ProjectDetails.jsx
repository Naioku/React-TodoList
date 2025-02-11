import Task from "./Task.jsx";
import PropTypes from "prop-types";
import {useRef} from "react";

export default function ProjectDetails(
    {
        project,
        onDelete,
        onAddTask,
        onDeleteTask,
    }
) {
    const inputTaskName = useRef();

    function handleClickedDelete() {
        onDelete(project.id);
    }

    function handleClickedAddTask() {
        const newTaskId = project.lastUsedTaskId + 1
        onAddTask(project.id, {id: newTaskId, name: inputTaskName.current.value}, newTaskId);
    }

    function handleDeleteTask(id) {
        onDeleteTask(project.id, id);
    }

    return <div>
        <header>
            <div>
                <h2>{project.name}</h2>
                <button onClick={handleClickedDelete}>Delete</button>
            </div>
            <p>{project.dueDate}</p>
            <p>{project.description}</p>
        </header>
        <section>
            <h3>Tasks</h3>
            <input ref={inputTaskName} type="text" />
            <button onClick={handleClickedAddTask}>Add Task</button>
            <ul>
                {project.tasks.map((task, i) => <Task key={i} task={task} onDelete={handleDeleteTask}/>)}
            </ul>
        </section>
    </div>
}

ProjectDetails.propTypes = {
    project: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired
}