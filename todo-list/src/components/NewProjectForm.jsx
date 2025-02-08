import Input from "./Input.jsx";

export default function NewProjectForm({onCancelClicked, onSaveClicked}) {
    return <div>
        <div>
            <button onClick={onCancelClicked}>Cancel</button>
            <button onClick={onSaveClicked}>Save</button>
        </div>
        <Input label={"Name"} type="text" />
        <Input label={"Description"} type="text" />
        <Input label={"Due date"} type="date" />
    </div>
}