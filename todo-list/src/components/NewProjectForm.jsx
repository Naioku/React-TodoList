import Input from "./Input.jsx";
import {useRef} from "react";
import PropTypes from "prop-types";

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
            <button onClick={handleClickCancel}>Cancel</button>
            <button onClick={handleClickSave}>Save</button>
        </div>
        <Input ref={inputName} label={"Name"} type="text" />
        <Input ref={inputDescription} label={"Description"} type="text" />
        <Input ref={inputDueDate} label={"Due date"} type="date" />
    </div>
}

NewProjectForm.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}