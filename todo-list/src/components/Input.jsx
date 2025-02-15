import PropTypes from "prop-types";
import {H3} from "./Headers.jsx";
import {styled} from "styled-components";

const Container = styled.div`
    ${props => (props.$fillSpace ? "flex: 1" : "width: fit-content")};
`

const InputInternal = styled.input`
    height: 1.5rem;
    width: ${props => (props.$fillSpace ? "100%" : "15rem")};
    border: 2px solid ${props => (props.$isInvalid) ? "#ca6868" : "#636363"};
    border-radius: 3px;
    outline: none;
    background-color: ${props => (props.$isInvalid) ? "#755050" : "#3b3b3b"};
    

    &:focus {
        border-color: #646cff;
    }
`

const Label = styled(H3)`
    margin: 0;
    text-align: left;
`

export default function Input({label, ...props}) {
    return <Container $fillSpace={label === undefined}>
        {label && <Label>{label}</Label>}
        <InputInternal $fillSpace={label === undefined} {...props} />
    </Container>
}

Input.propTypes = {
    label: PropTypes.string
}