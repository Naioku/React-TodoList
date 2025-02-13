import Task from "./Task.jsx";
import PropTypes from "prop-types";
import {useRef} from "react";
import Button from "./Button.jsx";
import {H2, H3} from "./Headers.jsx";
import Input from "./Input.jsx";
import {styled} from "styled-components";

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

const HeaderTasks = styled(H3)`
    text-align: left;
`

const ContainerAddTask = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

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
            <ContainerHeader>
                <HeaderProject>{project.name}</HeaderProject>
                <Button onClick={handleClickedDelete}>Delete</Button>
            </ContainerHeader>
            <PDueDate>{project.dueDate}</PDueDate>
            <p>{project.description}</p>
        </header>
        <section>
            <HeaderTasks>Tasks</HeaderTasks>
            <ContainerAddTask>
                <Input ref={inputTaskName} type="text"/>
                <Button onClick={handleClickedAddTask}>Add Task</Button>
            </ContainerAddTask>
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