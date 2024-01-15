import './App.css';
import EventsFunctional from './components/EventsFunctional';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';
import EventsClass from './components/EventsClass';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';


function App() {
  return (
    <div className="App">
      <FunctionalGreeting greeting="Hello fellow react coder!"/>
      <StatefulGreeting greeting="I'm a stateful component" name="Georgina"/>
      <EventsFunctional />
      <EventsClass />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true}/>
    </div>
  );
}

export default App;
