
import './App.css';
import PersonList from './Components/PersonList'
import PersonInput from './Components/PersonInput'
import DeleteUser from './Components/DeleteUser'

function App() {
  return (
    <div className="App">
      
        <DeleteUser />
        <PersonList />
    </div>
  );
}

export default App;
