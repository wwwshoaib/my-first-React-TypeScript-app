
interface TodoPropsType {
    task: string,
    time?: string
}

function ToDo( {task, time}:TodoPropsType) {

    return <li>{task} at {time}</li>

}

export default ToDo;


