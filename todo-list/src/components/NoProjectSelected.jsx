import noProjectImage from "../assets/no-projects.png";
import PropTypes from "prop-types";
import {styled} from "styled-components";
import Button from "./Button.jsx";
import {H2} from "./Headers.jsx";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
`

const P = styled.p`
    text-align: center;
`

const Img = styled.img`
    width: 7rem;
`

export default function NoProjectSelected({onButtonClicked}) {
    return <Container>
        <Img src={noProjectImage} alt="no-projects"/>
        <H2>No Project Selected</H2>
        <P>Select a project or get started with a new one.</P>
        <Button onClick={onButtonClicked}>Create new project</Button>
    </Container>
}

NoProjectSelected.propTypes = {
    onButtonClicked: PropTypes.func.isRequired
}