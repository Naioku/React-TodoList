import {styled, keyframes} from "styled-components";
import {H2} from "./Headers.jsx";
import Button from "./Button.jsx";
import PropTypes from "prop-types";
import SidebarProjects from "./SidebarProjects.jsx";
import React from "react";

const Aside = styled.aside`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 60px;
    background-color: #1c1c1c;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    transition: width 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    overflow: hidden;
    z-index: 1000;

    &:hover {
        width: 250px;
        box-shadow: 5px 0 15px rgba(0, 0, 0, 0.2);
        padding: 20px;
    }
`

const fadeIn = keyframes`
    from {
        opacity: 0;
        max-height: 0;
        padding: 0;
        margin: 0;
    }
    to {
        opacity: 1;
        max-height: 50px;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        max-height: 50px;
    }
    to {
        opacity: 0;
        max-height: 0;
        padding: 0;
        margin: 0;
    }
`;

export const H2Sidebar = styled(H2)`
    font-weight: 700;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;

    ${Aside}:hover & {
        animation: ${fadeIn} 0.3s ease-in-out forwards;
    }

    ${Aside}:not(:hover) & {
        animation: ${fadeOut} 0.3s ease-in-out forwards;
    }
`

export const ButtonAddProject = styled(Button)`
    background-color: #646cff;
    margin-bottom: 10px;
    transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;

    &:hover {
        background-color: #8e8eff;
    }

    ${Aside}:hover & {
        animation: ${fadeIn} 0.3s ease-in-out forwards;
    }

    ${Aside}:not(:hover) & {
        animation: ${fadeOut} 0.3s ease-in-out forwards;
    }
`

export default function Sidebar({projects, onAddProject, onProjectSelected}) {
    const [isExpanded, setExpanded] = React.useState(false);

    return <Aside
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
    >
        <H2Sidebar>Your projects</H2Sidebar>
        <ButtonAddProject onClick={onAddProject}>+ Add project</ButtonAddProject>
        <SidebarProjects projects={projects} onProjectSelected={onProjectSelected} isExpanded={isExpanded}/>
    </Aside>
}

Sidebar.propTypes = {
    projects: PropTypes.array.isRequired,
    onAddProject: PropTypes.func.isRequired,
    onProjectSelected: PropTypes.func.isRequired
}