import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Counter from './components/counter';
import Movie from './components/movie';
import TaskList from './components/TaskList';
// import TaskDetail from './components/TaskDetail';

function App() {
  return (
    <div className="App">
      <Counter/>
        <Movie/>  
          <TaskList/>
        <Router>
            <Routes>
               <Route path="/tasks/:taskId"/>
               {/* <TaskDetail items={items} /> */}
            </Routes>
        </Router> 
    </div>
  );
}

export default App;
