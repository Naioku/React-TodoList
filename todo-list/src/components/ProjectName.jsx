export default function ProjectName({project, onClick}) {
    return <button onClick={() => onClick(project.id)}>
        {project.name}
    </button>
}