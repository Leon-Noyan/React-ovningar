import Card from './Card.component'

interface User {
    id: number
    name: string
    email: string
    address: {
        city: string
    }
}

const UserCard = ({ user }: { user: User }) => {
    return (
        <Card>
            <h3>{user.name}</h3>
            <p className="email">{user.email}</p>
            <p className="city">{user.address.city}</p>
        </Card>
    )
}

export default UserCard
