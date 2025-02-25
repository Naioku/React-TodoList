import ProjectDetails from "./components/ProjectDetails.jsx";
import NewProjectForm from "./components/NewProjectForm.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";
import {styled} from "styled-components";
import Sidebar from "./components/Sidebar.jsx";

const Main = styled.main`
    flex: 1;
    min-width: 0; /* Highly necessary for the flexbox, if any child's text overflows. */
    padding: 20px;
    margin-left: 60px;
`

const TESTING_DATA = {
    selectedProjectId: undefined,
    lastUsedProjectId: 1,
    projects: [
        {
            id: 0,
            name: "Project 1",
            dueDate: "2020-05-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt nunc iaculis, fringilla risus et, rhoncus enim. Donec enim leo, euismod quis ornare sit amet, gravida et turpis. Curabitur sodales euismod dictum. Integer ullamcorper diam in metus consequat, in fringilla ligula placerat. Sed justo massa, eleifend faucibus tempor in, vehicula in enim. Aenean efficitur pellentesque purus, vel aliquet lacus interdum non. Nulla ex sapien, pellentesque quis lacus dictum, egestas suscipit libero.",
            tasks: [
                {id: 0, name: "Task 1"},
                {id: 1, name: "Task 2"},
                {id: 2, name: "Task 3"},
                {id: 3, name: "Task 4"},
                {id: 4, name: "Task 5"},
            ],
            lastUsedTaskId: 4
        },
        {
            id: 1,
            name: "Project 2",
            dueDate: "2020-05-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt nunc iaculis, fringilla risus et, rhoncus enim. Donec enim leo, euismod quis ornare sit amet, gravida et turpis. Curabitur sodales euismod dictum. Integer ullamcorper diam in metus consequat, in fringilla ligula placerat. Sed justo massa, eleifend faucibus tempor in, vehicula in enim. Aenean efficitur pellentesque purus, vel aliquet lacus interdum non. Nulla ex sapien, pellentesque quis lacus dictum, egestas suscipit libero.",
            tasks: [
                {id: 0, name: "Task 1"},
                {id: 1, name: "Task 2"}
            ],
            lastUsedTaskId: 1
        }
    ]
}

// const STARTING_DATA = {
//     selectedProjectId: undefined,
//     lastUsedProjectId: -1,
//     projects: []
// }

function App() {
    const [projectsState, setProjectsState] = useState(
        TESTING_DATA,
        // STARTING_DATA
    );

    function startNewProjectCreation() {
        setProjectsState(prevState => ({
            ...prevState,
            selectedProjectId: null
        }));
    }

    function selectProject(id) {
        setProjectsState(prevState => ({
            ...prevState,
            selectedProjectId: id
        }));
    }

    function addNewProject(project) {
        setProjectsState(prevState => {
            const newProjectId = prevState.lastUsedProjectId + 1;
            project.id = newProjectId
            return ({
                ...prevState,
                selectedProjectId: newProjectId,
                lastUsedProjectId: newProjectId,
                projects: [
                    ...prevState.projects,
                    project
                ]
            });
        });
    }

    function rejectProjectCreation() {
        setProjectsState(prevState => ({
            ...prevState,
            selectedProjectId: undefined
        }));
    }

    function deleteProject(id) {
        setProjectsState(prevState => {
            const newProjects = prevState.projects.filter(project => project.id !== id);
            return {
                ...prevState,
                projects: newProjects,
                selectedProjectId: undefined
            };
        });
    }

    function addNewTask(projectId, task, lastUsedTaskId) {
        setProjectsState(prevState => {
            const newProjects = prevState.projects.map(prevProject => {
                let newProject = prevProject;

                if (prevProject.id === projectId) {
                    newProject = {...prevProject, tasks: [...prevProject.tasks, task], lastUsedTaskId: lastUsedTaskId};
                }

                return newProject;
            })

            return {
                ...prevState,
                projects: newProjects,
            };
        });
    }

    function deleteTask(projectId, id) {
        setProjectsState(prevState => {
            const newProjects = prevState.projects.map(prevProject => {
                let newProject = prevProject;

                if (prevProject.id === projectId) {
                    newProject = {...prevProject, tasks: [...prevProject.tasks.filter(task => task.id !== id)]}
                }

                return newProject;
            })

            return {
                ...prevState,
                projects: newProjects,
            };
        });
    }

    let mainContent;

    if (projectsState.selectedProjectId === undefined) {
        mainContent =  <NoProjectSelected onButtonClicked={startNewProjectCreation} />
    }
    else if (projectsState.selectedProjectId === null) {
        mainContent = <NewProjectForm
            onCancel={rejectProjectCreation}
            onSave={addNewProject}
        />
    }
    else {
        const project = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
        mainContent = <ProjectDetails
            project={project}
            onDelete={deleteProject}
            onAddTask={addNewTask}
            onDeleteTask={deleteTask}
        />
    }

    return (
        <>
            <Sidebar
                projects={projectsState.projects}
                selectedProjectId={projectsState.selectedProjectId}
                onAddProject={startNewProjectCreation}
                onProjectSelected={selectProject}
            />

            <Main id="mainView">
                {mainContent}
            </Main>
        </>
    )
}

export default App
