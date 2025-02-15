import PropTypes from "prop-types";
import Button from "./Button.jsx";
import {H2} from "./Headers.jsx";
import {styled} from "styled-components";
import Tasks from "./Tasks.jsx";

const ContainerMain = styled.div`
    max-width: 60rem;
`

const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const HeaderProject = styled(H2)`
    margin: 0;
`

const PDueDate = styled.p`
    color: #888888;
    margin: 0;
`

export default function ProjectDetails(
    {
        project,
        onDelete,
        onAddTask,
        onDeleteTask,
    }
) {
    function handleClickedDelete() {
        onDelete(project.id);
    }

    return <ContainerMain>
        <header>
            <ContainerHeader>
                <HeaderProject>{project.name}</HeaderProject>
                <Button onClick={handleClickedDelete}>Delete</Button>
            </ContainerHeader>
            <PDueDate>{project.dueDate}</PDueDate>
            <p>{project.description}</p>
        </header>
        <Tasks
            projectId={project.id}
            lastUsedTaskId={project.lastUsedTaskId}
            tasks={project.tasks}
            onAddTask={onAddTask}
            onDeleteTask={onDeleteTask}
        />
    </ContainerMain>
}

ProjectDetails.propTypes = {
    project: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired
}