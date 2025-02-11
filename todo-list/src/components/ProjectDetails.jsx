import Task from "./Task.jsx";
import PropTypes from "prop-types";
import {useRef} from "react";
import Button from "./Button.jsx";
import {H2, H3} from "./Headers.jsx";

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
                <H2>{project.name}</H2>
                <Button onClick={handleClickedDelete}>Delete</Button>
            </div>
            <p>{project.dueDate}</p>
            <p>{project.description}</p>
        </header>
        <section>
            <H3>Tasks</H3>
            <input ref={inputTaskName} type="text" />
            <Button onClick={handleClickedAddTask}>Add Task</Button>
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