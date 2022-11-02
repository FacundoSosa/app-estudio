import './App.css';
import CardProvider from './components/Context/Context';
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './components/ProjectsContainer/Project';

function App() {
  return (
    <CardProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ProjectsContainer />} />
          <Route exact path='/proyecto/:projectId' element={<Project />} />
        </Routes>
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;
