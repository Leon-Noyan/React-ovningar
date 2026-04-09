import { useEffect, useState } from 'react'

function Get() {
    const [users, setUsers] = useState([])
    const [count, setCount] = useState(10)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchInfo() {
            setLoading(true)
            setError(null)
            try {
              // added to show that the loading text works
              await new Promise(resolve => setTimeout(resolve, 1000))
                // fetch users
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                )
                const data = await response.json()
                // handles how many users to show
                const pickedData = data.slice(0, count)
                setUsers(pickedData)
            } catch (error) {
                setError(error.message)
                // we use finally to make sure that the loading text is gone no matter the result of the fetch request
            } finally {
                setLoading(false)
            }
        }

        fetchInfo()

        return () => {
            console.log('Cleaning up is running')
        }
    }, [count])

    return (
        <div>
            <h2>User info:</h2>
            <label>Pick</label>
            <select
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
            >
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
            </select>
  
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            {!loading && !error && (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Get
