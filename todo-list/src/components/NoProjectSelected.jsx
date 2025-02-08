import noProjectImage from "../assets/no-projects.png";
import "./NoProjectSelected.css"

export default function NoProjectSelected({onButtonClicked}) {
    return <div>
        <img src={noProjectImage} alt="no-projects" />
        <h2>No Project Selected</h2>
        <p>Select a project or get started with a new one.</p>
        <button onClick={onButtonClicked}>Create new project</button>
    </div>
}