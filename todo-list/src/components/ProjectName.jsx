import PropTypes from "prop-types";

export default function ProjectName({project, onClick}) {
    return <button onClick={() => onClick(project.id)}>
        {project.name}
    </button>
}

ProjectName.propTypes = {
    project: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}