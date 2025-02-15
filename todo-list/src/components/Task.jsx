import PropTypes from "prop-types";
import Button from "./Button.jsx";
import {styled} from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Span = styled.span`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export default function Task({task, onDelete}) {
    function handleClickedDelete() {
        onDelete(task.id);
    }

    return <Container>
        <Span>{task.name}</Span>
        <Button onClick={handleClickedDelete}>Delete</Button>
    </Container>
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
}