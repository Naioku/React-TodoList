import {styled} from "styled-components";
import PropTypes from "prop-types";
import Button from "./Button.jsx";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
`

const ButtonProject = styled(Button)`
    ${props => (props.$isExpanded ? "background-color: transparent" : "")};
    ${props => (props.$isExpanded ? "" : "border-radius: 0")};

`

const Label = styled.span`
    ${props => (props.$isSelected) ? "color: #646cff" : ""};
`

export default function SidebarProjects({projects, selectedProjectId, onProjectSelected, isExpanded}) {
    function shortenName(name) {
        return name.length <= 2 ? name : `${name.charAt(0)}${name.charAt(name.length - 1)}`;
    }

    return <Container>
        {projects.map((project, i) =>
            <ButtonProject key={i} onClick={() => onProjectSelected(i)} $isExpanded={isExpanded}>
                <Label $isSelected={project.id === selectedProjectId}>
                    {isExpanded ? project.name : shortenName(project.name)}
                </Label>
            </ButtonProject>
        )}

    </Container>
}

SidebarProjects.propTypes = {
    projects: PropTypes.array.isRequired,
    selectedProjectId: PropTypes.number.isRequired,
    onProjectSelected: PropTypes.func.isRequired,
    isExpanded: PropTypes.bool.isRequired
}