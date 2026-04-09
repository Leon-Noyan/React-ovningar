
import './App.css'
import Card from './components/card-component'

function App() {

  return (
    <>
      <Card title="Member" bgColor="red">
        <p>sanna</p>
        <p>sanna@mejl.com</p>
      </Card>
      <Card title="Intrests" bgColor="lightgreen">
        <ul style={{ listStyleType: 'none' }}>
          <li>Running Track</li>
          <li>Baseball</li>
        </ul>
      </Card>
      <Card title="Card 3" bgColor="lightblue">
        <p>Details</p>
        <button onClick={() => alert('No more details')}>Show details</button>
      </Card>
    </>
  )
}

export default App
