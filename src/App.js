import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import BasePage from './BasePage';
import WorkExperience from './WorkExperience';
import OtherExperience from './OtherExperience';
import Personal from './Personal';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={ <BasePage /> } />
      <Route path="/WorkExperience" element={ <WorkExperience /> } />
      <Route path="/OtherExperience" element={ <OtherExperience /> } />
      <Route path="/Personal" element={ <Personal /> } />
    </Routes>
  </Router>
  )
}

export default App;
