import {styled} from "styled-components";

const Button = styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #292929;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #393939;
    }

    @media (prefers-color-scheme: light) {
        background-color: #f9f9f9;
    }
`

export default Button;