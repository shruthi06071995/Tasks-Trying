import './App.css'
import CompA from './CompA.jsx';
import CompB from './CompB.jsx';
import CompC from './CompC.jsx';
import { UserProvider } from './UserContext.jsx'
// import UserDetails from './UserDetails'
// import UserForm from './UserForm'

function App() {

  return (
    <>
      {/* <UserProvider>
        <h2>React Context Input Example</h2>
        <UserForm />
        <UserDetails />
      </UserProvider> */}

      <UserProvider>
        <h2><b><u>React Context Input Example</u></b></h2>
        <CompA />
        <CompB />
        <CompC />
      </UserProvider>
    </>
  );
}

export default App
