type ButttonsProp = {
    add: () => void,
    sub: () => void,
}

export default function Buttons(props :ButttonsProp) {

    return <>
        <button onClick={props.add}>+</button>
        <button onClick={props.sub}>-</button>
    </>
}