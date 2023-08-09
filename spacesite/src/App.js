import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import HomePage from './components/Home';
import Moon from './components/destination-moon';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '@mui/material/List';
import Hamburger from './components/Hamburger';

function App() {
  return (
    <div>
      <Router>
      <Heading/>
      <HomePage/>
        <List/>
          <Switch>
            <Route path="/" element={<HomePage/>} >
              <Route index element={<HomePage/>} />
              <Route path="destination" element={<Moon/>} />
            </Route>
          </Switch>
      </Router>
    </div>

  );
}

export default App;
