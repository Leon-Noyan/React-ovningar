interface UserCardProps {
    user: {
        id: number
        name: string
        email: string
        city: string
    }
    color: string
    onBtnClick: (name: string) => void
}

function UserCard({ user, color, onBtnClick }: UserCardProps) {
  const conditionalCity =
    user.city === 'Stockholm' || user.city === 'Göteborg'  || user.city === 'Malmö'
    return (

        <div style={{
          backgroundColor: color,
          border: '1px solid black',
          color: 'white',
        }}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.city}</p>
            <button onClick={() => onBtnClick(user.name)}>Show</button>

            {conditionalCity && <p>Your contact lives in a big city</p>}
        </div>

    )
}

export default UserCard
