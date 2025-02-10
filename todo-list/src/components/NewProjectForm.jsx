import Input from "./Input.jsx";
import {useRef} from "react";

export default function NewProjectForm({onClickedCancel, onClickedSave}) {
    const inputName = useRef();
    const inputDescription = useRef();
    const inputDueDate = useRef();

    function handleClickCancel() {
        onClickedCancel();
    }

    function handleClickSave() {
        onClickedSave();
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