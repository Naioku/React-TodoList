import Input from "./Input.jsx";
import Button from "./Button.jsx";
import {useRef, useState} from "react";
import Task from "./Task.jsx";
import {styled} from "styled-components";
import {H3} from "./Headers.jsx";
import PropTypes from "prop-types";

const HeaderTasks = styled(H3)`
    text-align: left;
    margin-bottom: 0;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const ContainerAddTask = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`

const ContainerTasks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
`

function isInputValid(value) {
    return value.length < 1 || value.length > 90;
}

export default function Tasks({projectId, lastUsedTaskId, tasks, onAddTask, onDeleteTask}) {
    const inputTaskName = useRef();
    const [isInputTaskNameInvalid, setIsInputTaskNameInvalid] = useState(false);

    function handleClickedAddTask() {
        if (isInputValid(inputTaskName.current.value.trim())) {
            setIsInputTaskNameInvalid(true);
            return;
        }

        setIsInputTaskNameInvalid(false);
        const newTaskId = lastUsedTaskId + 1
        onAddTask(projectId, {id: newTaskId, name: inputTaskName.current.value}, newTaskId);
    }

    function handleInputValueChanged() {
        if (!isInputTaskNameInvalid) return;

        if (!isInputValid(inputTaskName.current.value.trim())) {
            setIsInputTaskNameInvalid(false);
        }
    }

    function handleDeleteTask(id) {
        onDeleteTask(projectId, id);
    }

    return <Section>
        <HeaderTasks>Tasks</HeaderTasks>
        <ContainerAddTask>
            <Input ref={inputTaskName} type="text" onChange={handleInputValueChanged} $isInvalid={isInputTaskNameInvalid}/>
            <Button onClick={handleClickedAddTask}>Add Task</Button>
        </ContainerAddTask>
        <ContainerTasks>
            {tasks.map((task, i) => <Task key={i} task={task} onDelete={handleDeleteTask}/>)}
        </ContainerTasks>
    </Section>
}

Tasks.propTypes = {
    projectId: PropTypes.number.isRequired,
    lastUsedTaskId: PropTypes.number.isRequired,
    tasks: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired
}