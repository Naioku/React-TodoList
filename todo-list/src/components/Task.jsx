import PropTypes from "prop-types";
import Button from "./Button.jsx";

export default function Task({task, onDelete}) {
    function handleClickedDelete() {
        onDelete(task.id);
    }

    return <li>
        <span>{task.name}</span>
        <Button onClick={handleClickedDelete}>Delete</Button>
    </li>
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
}