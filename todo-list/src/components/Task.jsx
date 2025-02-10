import PropTypes from "prop-types";

export default function Task({name}) {
    return <li>
        <span>{name}</span>
        <button>Clear</button>
    </li>
}

Task.propTypes = {
    name: PropTypes.string.isRequired
}