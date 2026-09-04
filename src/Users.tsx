

import UserCard from './UserCard'
interface TypeUser {
    name: string,
    isLoggedIn?: boolean
}

const users = [
    { name: 'Omar Sunny', isLoggedIn: true},
    { name: 'Salman Shah', isLoggedIn: false},
    { name: 'Ajay Debgon', isLoggedIn: true},
    { name: 'Saliar Maa', isLoggedIn: true},

]

export default function Users( {name, isLoggedIn}: TypeUser ) {

return (
    <div>
        {
            users.map(user => <UserCard name = {user.name} isLoggedIn ={user.isLoggedIn}></UserCard> )
        }
    </div>
)
}