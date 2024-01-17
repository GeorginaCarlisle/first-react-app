import './App.css';
import EventsFunctional from './components/EventsFunctional';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';
import EventsClass from './components/EventsClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';


function App() {
  return (
    <div className="App">
      <FunctionalGreeting greeting="Hello fellow react coder!"/>
      <StatefulGreeting greeting="I'm a stateful component" name="Georgina"/>
      <EventsFunctional />
      <EventsClass />
      <NestingComponents />
      <ConditionalRenderingFunctional connected={true}/>
      <MethodsAsPropsParent />
      <RenderingLists />
      <LifeCyclesCDM />
      <LifeCyclesCDU />
      <LifeCyclesCWU />
      <ControlledForm />
    </div>
  );
}

export default App;
