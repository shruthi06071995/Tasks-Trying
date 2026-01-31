import './App.css'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import { ContactProvider } from './ContactContext'

function App() {

  return (
    <>
      <ContactProvider>
        <Component1 />
        <Component2 />
        <Component3 />
      </ContactProvider>
    </>
  );
}

export default App
