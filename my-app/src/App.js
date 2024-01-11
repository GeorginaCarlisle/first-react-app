import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';


function App() {
  return (
    <div className="App">
      <FunctionalGreeting greeting="Hello fellow react coder!"/>
      <StatefulGreeting greeting="I'm a stateful component" name="Georgina"/>
    </div>
  );
}

export default App;
