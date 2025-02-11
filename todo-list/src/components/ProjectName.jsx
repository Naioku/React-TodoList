import PropTypes from "prop-types";
import Button from "./Button.jsx";

export default function ProjectName({project, onClick}) {
    return <Button onClick={() => onClick(project.id)}>
        {project.name}
    </Button>
}

ProjectName.propTypes = {
    project: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}