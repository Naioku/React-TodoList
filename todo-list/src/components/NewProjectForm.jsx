import Input from "./Input.jsx";
import {useRef} from "react";
import PropTypes from "prop-types";
import Button from "./Button.jsx";
import {styled} from "styled-components";

const ButtonLeft = styled(Button)`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`

const ButtonRight = styled(Button)`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`

const ContainerInput = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export default function NewProjectForm({onCancel, onSave}) {
    const inputName = useRef();
    const inputDescription = useRef();
    const inputDueDate = useRef();

    function handleClickCancel() {
        onCancel();
    }

    function handleClickSave() {
        onSave(
            {
                name: inputName.current.value,
                description: inputDescription.current.value,
                dueDate: inputDueDate.current.value,
                tasks: [],
                lastUsedTaskId: -1
            }
        );
    }

    return <div>
        <div>
            <ButtonLeft onClick={handleClickCancel}>Cancel</ButtonLeft>
            <ButtonRight onClick={handleClickSave}>Save</ButtonRight>
        </div>
        <ContainerInput>
            <Input ref={inputName} label={"Name"} type="text"/>
            <Input ref={inputDescription} label={"Description"} type="text"/>
            <Input ref={inputDueDate} label={"Due date"} type="date"/>
        </ContainerInput>
    </div>
}

NewProjectForm.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}