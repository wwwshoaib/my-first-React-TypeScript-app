
interface PropTypes {
    task: string,
    isDone: boolean
}
function Rendering({task, isDone}: PropTypes) {

   return isDone ? <li>Completed: {task}</li> : <li>Pending: {task}</li>
    
}

export default Rendering;