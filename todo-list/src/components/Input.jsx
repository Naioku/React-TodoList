import PropTypes from "prop-types";
import {H3} from "./Headers.jsx";
import {styled} from "styled-components";

const Container = styled.div`
    width: fit-content;
`

const InputInternal = styled.input`
    height: 1.5rem;
    width: 15rem;

    &:focus {
        border: 2px solid #646cff;
        border-radius: 3px;
        outline: none;
        background-color: #3b3b3b;
    }
`

const Label = styled(H3)`
    margin: 0;
    text-align: left;
`

export default function Input({label, ...props}) {
    return <Container>
        {label && <Label>{label}</Label>}
        <InputInternal {...props} />
    </Container>
}

Input.propTypes = {
    label: PropTypes.string
}