import './App.css'
import ToDo from './TodoPropTypes'
import Rendering from './Conditional-Rendering'
import Book from './Map'
import Users from './Users'


const books = ['Physics', 'Chemistry', 'Biology', 'Mathematics'];

function App() {
  return (
    <>
      <h2>My books: </h2>
       {
        books.map(book => <Book name = {book} />)
      }

      <h2>Users</h2>
      <Users/>
      
      
      
     
    </>
  )
}

function Student() {
  return (
    <h1 
      style={{
        border: '2px solid yellow',
      }}
    >
      Hello, React
    </h1>
  )
}

// props

function Person(props) {
  console.log(props)
  return (
    <div className = 'border'>
      <h2>Name of Person: {props.name}</h2>;
      <h2>Age of Person: {props.age}</h2>;

    </div>
  )
}


export default App