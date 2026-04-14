import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar.component'
import UserList from './components/userList.component'

interface User {
    id: number
    name: string
    email: string
    address: {
        city: string
    }
}

function App() {
    // 1. States (Dina "lådor" för data)
    const [users, setUsers] = useState<User[]>([])
    const [search, setSearch] = useState('') // Vi lägger till sök-state direkt!
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    // 2. Logik (Hämta data när komponenten startar)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong')
                }
                return response.json()
            })
            .then((data) => {
                setUsers(data)
                setIsLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setIsLoading(false)
            })
    }, [])

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    )

    // 3. Render (Vad användaren ser)
    return (
        <div className="App">
            <h1>User Dashboard</h1>

            <SearchBar search={search} setSearch={setSearch} />

            {isLoading && <p>Laddar...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <UserList users={filteredUsers} />
        </div>
    )
}

export default App
