import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BasePage from './BasePage';
import WorkExperience from './WorkExperience';
import PersonalExperience from './PersonalExperience';
import Personal from './Personal';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={ <BasePage /> } />
      <Route path="/WorkExperience" element={ <WorkExperience /> } />
      <Route path="/PersonalExperience" element={ <PersonalExperience /> } />
      <Route path="/Personal" element={ <Personal /> } />
    </Routes>
  </Router>
  )
}

export default App;
