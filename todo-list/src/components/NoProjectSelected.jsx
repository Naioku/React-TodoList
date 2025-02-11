import noProjectImage from "../assets/no-projects.png";
import PropTypes from "prop-types";
import {styled} from "styled-components";
import Button from "./Button.jsx";
import {H2} from "./Headers.jsx";

const Img = styled.img`
    width: 5rem;
`

export default function NoProjectSelected({onButtonClicked}) {
    return <div>
        <Img src={noProjectImage} alt="no-projects"/>
        <H2>No Project Selected</H2>
        <p>Select a project or get started with a new one.</p>
        <Button onClick={onButtonClicked}>Create new project</Button>
    </div>
}

NoProjectSelected.propTypes = {
    onButtonClicked: PropTypes.func.isRequired
}