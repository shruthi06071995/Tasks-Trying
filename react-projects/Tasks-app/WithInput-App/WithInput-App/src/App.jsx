import { useState } from 'react';
import './App.css'
import CompA from './CompA.jsx';
import CompB from './CompB.jsx';
import CompC from './CompC.jsx';
import { UserContext } from './UserContext.jsx'
// import UserDetails from './UserDetails'
// import UserForm from './UserForm'

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [style, setStyle] = useState({
    color: "",
    bgColor: "",
    fontSize: ""
  });

  const [error, setError] = useState({});


  return (
    <>
      {/* <UserProvider>
        <h2>React Context Input Example</h2>
        <UserForm />
        <UserDetails />
      </UserProvider> */}

      <UserContext.Provider
        value={{ user, setUser, style, setStyle, error, setError }}>
        <h2><b><u>React Context Input Example</u></b></h2>
        <CompA />
        <CompB />
        <CompC />
      </UserContext.Provider>
    </>
  );
}

export default App
