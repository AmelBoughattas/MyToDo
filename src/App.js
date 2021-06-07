import './App.css';
import AddTask from './Component/AddTask';
import ListTasks from './Component/ListTasks';

function App() {
  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow  App">
       <AddTask/>
       <ListTasks/>
    </div>
  );
}

export default App;
