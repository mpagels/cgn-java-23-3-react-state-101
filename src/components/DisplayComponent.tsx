type DisplayComponentProps = {
    value : string
}

export default function DisplayComponent(props:DisplayComponentProps) {
    return <p>{props.value}</p>
}