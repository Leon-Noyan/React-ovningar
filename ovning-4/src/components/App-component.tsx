import UserList from './UserList'

function AppComponent() {
    const users = [
        { id: 1, name: 'Anna', email: 'anna@live.se', city: 'Stockholm' },
        { id: 2, name: 'Erik', email: 'erik@gmail.com', city: 'Kiruna' },
        { id: 3, name: 'Lisa', email: 'lisa@fbre.se', city: 'Göteborg' }
    ]

    const showInfoHandler = (name: string) => {
        alert(name)
    }

    return (
        <>
            <h1>Contacts</h1>
            <UserList userArray={users} cardColor="green" onShow={showInfoHandler} />
        </>
    )
}

export default AppComponent
