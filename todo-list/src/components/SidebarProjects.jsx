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

export default function SidebarProjects({projects, onProjectSelected, isExpanded}) {
    function shortenName(name) {
        return name.length <= 2 ? name : `${name.charAt(0)}${name.charAt(name.length - 1)}`;
    }

    return <Container>
        {projects.map((project, i) =>
            <ButtonProject key={i} onClick={() => onProjectSelected(i)} $isExpanded={isExpanded}>
                {isExpanded ? project.name : shortenName(project.name)}
            </ButtonProject>
        )}

    </Container>
}

SidebarProjects.propTypes = {
    projects: PropTypes.array.isRequired,
    onProjectSelected: PropTypes.func.isRequired,
    isExpanded: PropTypes.bool.isRequired
}