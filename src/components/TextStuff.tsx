import {ChangeEvent} from "react";

type TextStuffProps = {
    onHandleUpdate: (value: string) => void,
    input: string
}

export default function TextStuff(props:TextStuffProps) {

    function onUpdate(event: ChangeEvent<HTMLInputElement>) {
        props.onHandleUpdate(event.target.value)
    }
    return <input onChange={onUpdate}  type={"text"} value={props.input}/>
}