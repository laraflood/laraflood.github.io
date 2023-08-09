import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import HomePage from './components/Home';
import Moon from './components/destination-moon';

function App() {
  return (
    <div>
      <Heading />
      <Moon></Moon>
    </div>
  );
}

export default App;
