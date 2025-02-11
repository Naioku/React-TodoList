import PropTypes from "prop-types";
import {H3} from "./Headers.jsx";

export default function Input({label, ...props}) {
    return <div>
        <H3>{label}</H3>
        <input {...props} />
    </div>
}

Input.propTypes = {
    label: PropTypes.string.isRequired
}