import './App.css'
import CompA from './CompA'
import CompB from './CompB'
import CompC from './CompC'
import { UserProvider } from './Context'

function App() {

  return (
    <>
      <UserProvider>
        <h2><b><u>Welcome User / Guest</u></b></h2>
        <div>
          <CompA />
          <CompB />
          <CompC />
        </div>
      </UserProvider>
    </>
  )
}

export default App
