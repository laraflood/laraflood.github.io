import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import HomePage from './components/Home';
import Moon from './components/Moons';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import List from '@mui/material/List';
import Hamburger from './components/Hamburger';
import ReactDOM from "react-dom/client";
import React from 'react';

export default function App() {
  return (
    <div>
      <Router>
        <React.StrictMode>
          <Heading/>
          
            <Switch>
                <Route index path="/" exact component={withRouter(HomePage)} />
                <Route path="/destination" exact component={withRouter(Moon)} />
            </Switch>
        
        </React.StrictMode>
      </Router>
    </div>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
