import Input from "./Input.jsx";
import {useRef} from "react";
import PropTypes from "prop-types";

export default function NewProjectForm({onClickedCancel, onClickedSave}) {
    const inputName = useRef();
    const inputDescription = useRef();
    const inputDueDate = useRef();

    function handleClickCancel() {
        onClickedCancel();
    }

    function handleClickSave() {
        onClickedSave(
            inputName.current.value,
            inputDescription.current.value,
            inputDueDate.current.value
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
    onClickedCancel: PropTypes.func.isRequired,
    onClickedSave: PropTypes.func.isRequired
}