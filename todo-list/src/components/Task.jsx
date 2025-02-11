import PropTypes from "prop-types";

export default function Task({task, onDelete}) {
    function handleClickedDelete() {
        onDelete(task.id);
    }

    return <li>
        <span>{task.name}</span>
        <button onClick={handleClickedDelete}>Delete</button>
    </li>
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
}