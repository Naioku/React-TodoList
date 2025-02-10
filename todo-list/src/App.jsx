import './App.css'
import ProjectName from "./components/ProjectName.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import NewProjectForm from "./components/NewProjectForm.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";

const PROJECTS = [
    {
        id: 0,
        name: "Project 1",
        dueDate: "2020-05-01",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt nunc iaculis, fringilla risus et, rhoncus enim. Donec enim leo, euismod quis ornare sit amet, gravida et turpis. Curabitur sodales euismod dictum. Integer ullamcorper diam in metus consequat, in fringilla ligula placerat. Sed justo massa, eleifend faucibus tempor in, vehicula in enim. Aenean efficitur pellentesque purus, vel aliquet lacus interdum non. Nulla ex sapien, pellentesque quis lacus dictum, egestas suscipit libero.",
        tasks: [
            { name: "Task 1" },
            { name: "Task 2" },
            { name: "Task 3" },
            { name: "Task 4" },
            { name: "Task 5" },
        ]
    },
    {
        id: 1,
        name: "Project 2",
        dueDate: "2020-05-01",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt nunc iaculis, fringilla risus et, rhoncus enim. Donec enim leo, euismod quis ornare sit amet, gravida et turpis. Curabitur sodales euismod dictum. Integer ullamcorper diam in metus consequat, in fringilla ligula placerat. Sed justo massa, eleifend faucibus tempor in, vehicula in enim. Aenean efficitur pellentesque purus, vel aliquet lacus interdum non. Nulla ex sapien, pellentesque quis lacus dictum, egestas suscipit libero.",
        tasks: [
            { name: "Task 1" },
            { name: "Task 2" }
        ]
    }
]

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [...PROJECTS]
    });

    function handleNewProjectClicked() {
        setProjectsState(prevState => ({
            ...prevState,
            selectedProjectId: null
        }));
    }

    function handleProjectNameClicked(id) {
        setProjectsState(prevState => ({
            ...prevState,
            selectedProjectId: id
        }));
    }

    function handleSaveClicked() {

    }

    function handleCancelClicked() {

    }

    let mainContent;

    if (projectsState.selectedProjectId === undefined) {
        mainContent =  <NoProjectSelected />
    }
    else if (projectsState.selectedProjectId === null) {
        mainContent = <NewProjectForm
            onClickedCancel={handleCancelClicked}
            onClickedSave={handleSaveClicked}
        />
    }
    else {
        mainContent = <ProjectDetails {...projectsState.projects[projectsState.selectedProjectId]} />
    }

    return (
        <>
            <aside>
                <h2>Your projects</h2>
                <button onClick={handleNewProjectClicked}>+ Add project</button>
                {projectsState.projects.map((project, i) => <ProjectName
                        key={i}
                        project={project}
                        onClick={handleProjectNameClicked}
                />)}
            </aside>

            <main id="mainView">
                {mainContent}
            </main>
        </>
    )
}

export default App
