import './App.css'
import CntrlForm from './CntrlForm'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import ConditionalRendering from './ConditionalRendering'
import { ContactProvider } from './ContactContext'
import DelItems from './DelItems'
import InputDemo from './InputDemo'
import Login from './Login'
import Mapi from './Mapi'
import New from './New'
import TryToKnow from './TryToKnow'

function App() {

  return (
    <>
      <h2><u><b>CONTEXT TASK</b></u></h2>
      <ContactProvider>
        <Component1 />
        <Component2 />
        <Component3 />
      </ContactProvider>

      <br /><br />
      <h3><u>KNOWING SIMPLE</u></h3>
      <h4><b><i><u>UseState inc/dec Button(Event Handling)</u></i></b></h4>
      <TryToKnow />
      <br /><br />
      <h4><b><i><u>Show/Hide (Conditional Rendering)</u></i></b></h4>
      <ConditionalRendering /> <br /><br />
      <h4><b><i><u>Input Box With Live Display</u></i></b></h4>
      <InputDemo />
      <h4><b><i><u>Simple Validation</u></i></b></h4>
      <Login />
      <h4><i><u><b>Mapping Function</b></u></i></h4>
      <Mapi />
      <h4><i><u><b>Delete Items From List</b></u></i></h4>
      <DelItems />
      <h4><i><u><b>Controlled Form Input</b></u></i></h4>
      <CntrlForm />

      <New />
    </>
  );
}

export default App
