import UserCard from './userCard.component'

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

const UserList = ({ users }: {users: User[]}) => {
    return (
      <div className='user-grid'>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    )
}

export default UserList
