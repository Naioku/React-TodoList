import Input from "./Input.jsx";
import {useRef, useState} from "react";
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
    const [inputsValidationState, setInputsValidationState] = useState({name: true, description: true, dueDate: true});

    function isInputNameValid() {
        return inputName.current.value.length > 0 && inputName.current.value.length <= 30;
    }

    function isInputDescriptionValid() {
        return inputDescription.current.value.length > 0 && inputDescription.current.value.length <= 1000;
    }

    function isInputDueDateValid() {
        return inputDueDate.current.value.length === 10;
    }

    function updateInputsState() {
        setInputsValidationState(() => {
            return {
                name: isInputNameValid(),
                description: isInputDescriptionValid(),
                dueDate: isInputDueDateValid()
            };
        })
    }

    function canProjectBeCreated() {
        updateInputsState();
        return isInputNameValid() && isInputDescriptionValid() && isInputDueDateValid();
    }

    function handleInputValueChanged() {
        if (inputsValidationState.name && inputsValidationState.description && inputsValidationState.dueDate) return;

        updateInputsState();
    }

    function handleClickCancel() {
        onCancel();
    }

    function handleClickSave() {
        if (!canProjectBeCreated()) return;

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
            <Input ref={inputName} label={"Name"} type="text" onChange={handleInputValueChanged} $isInvalid={!inputsValidationState.name}/>
            <Input ref={inputDescription} label={"Description"} type="text" onChange={handleInputValueChanged} $isInvalid={!inputsValidationState.description}/>
            <Input ref={inputDueDate} label={"Due date"} type="date" onChange={handleInputValueChanged} $isInvalid={!inputsValidationState.dueDate}/>
        </ContainerInput>
    </div>
}

NewProjectForm.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}