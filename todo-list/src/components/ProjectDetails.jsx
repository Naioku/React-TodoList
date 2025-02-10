import Task from "./Task.jsx";
import PropTypes from "prop-types";

export default function ProjectDetails(
    {
        id,
        name,
        dueDate,
        description,
        tasks,
        onDelete
    }
) {
    function handleClickedDelete() {
        onDelete(id);
    }

    return <div>
        <header>
            <div>
                <h2>{name}</h2>
                <button onClick={handleClickedDelete}>Delete</button>
            </div>
            <p>{dueDate}</p>
            <p>{description}</p>
        </header>
        <section>
            <h3>Tasks</h3>
            <input type="text" />
            <button>Add Task</button>
            <ul>
                {tasks.map((task, i) => <Task key={i} name={task.name}/>)}
            </ul>
        </section>
    </div>
}

ProjectDetails.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}