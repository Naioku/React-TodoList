export default function Input({label, ...props}) {
    return <div>
        <h3>{label}</h3>
        <input {...props} />
    </div>
}