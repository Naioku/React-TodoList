import './App.css'
import ProjectName from "./components/ProjectName.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import Input from "./components/Input.jsx";
import NewProjectForm from "./components/NewProjectForm.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

const PROJECTS = [
    {
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
    }
]

function App() {
    function handleSaveClicked() {

    }

    function handleCancelClicked() {

    }

    return (
        <>
            <aside>
                <h2>Your projects</h2>
                <button>+ Add project</button>
                <ProjectName name="Project 1" />
                <ProjectName name="Project 2" />
            </aside>

            <div id="mainView">
                {/*<ProjectDetails {...PROJECTS[0]} />*/}

                {/*<NewProjectForm*/}
                {/*    onCancelClicked={handleCancelClicked}*/}
                {/*    onSaveClicked={handleSaveClicked}*/}
                {/*/>*/}

                <NoProjectSelected />
            </div>
        </>
    )
}

export default App
