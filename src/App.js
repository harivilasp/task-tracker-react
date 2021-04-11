import Header from './components/Header';
import { useState, useEffect } from 'react'

function App() {

  const [tasks, setTasks] = useState([])

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
