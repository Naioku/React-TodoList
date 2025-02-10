import PropTypes from "prop-types";

export default function Input({label, ...props}) {
    return <div>
        <h3>{label}</h3>
        <input {...props} />
    </div>
}

Input.propTypes = {
    label: PropTypes.string.isRequired
}