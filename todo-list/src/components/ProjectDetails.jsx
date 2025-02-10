import Task from "./Task.jsx";
import PropTypes from "prop-types";

export default function ProjectDetails(
    {
        project,
        onDelete
    }
) {
    function handleClickedDelete() {
        onDelete(project.id);
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
            <input type="text" />
            <button>Add Task</button>
            <ul>
                {project.tasks.map((task, i) => <Task key={i} name={task.name}/>)}
            </ul>
        </section>
    </div>
}

ProjectDetails.propTypes = {
    project: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
}