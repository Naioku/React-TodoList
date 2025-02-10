import Task from "./Task.jsx";
import PropTypes from "prop-types";

export default function ProjectDetails(
    {
        name,
        dueDate,
        description,
        tasks
    }
) {
    return <div>
        <header>
            <div>
                <h2>{name}</h2>
                <button>Delete</button>
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
    name: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired
}