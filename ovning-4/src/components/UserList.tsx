import UserCard from './UserCard'

interface UserProps {
    userArray: {
        id: number
        name: string
        email: string
        city: string
    }[]
    cardColor: string
    onShow: (name: string) => void
}

function UserList({ userArray, cardColor, onShow }: UserProps) {
    return (
        <div>
            <ul>
                {userArray.map((user) => (
                    <UserCard key={user.id} user={user} color={cardColor} onBtnClick={onShow} />
                ))}
            </ul>
        </div>
    )
}

export default UserList
