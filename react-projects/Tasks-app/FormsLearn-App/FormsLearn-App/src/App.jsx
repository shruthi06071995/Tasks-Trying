import './App.css'
// import ConnectForm from './ConnectForm'
import ContextForm from './ContextForm'
import FirstForms from './FirstForms'
import FourthForm from './FourthForm'
import MyForm from './MyForm'
import MyFormDot from './MyFormDot'
// import NewApproch from './NewApproch'
import OldApproch from './OldApproch'
import SecondForm from './SecondForm'
import ThirdForms from './ThirdForms'
// import YupResolver from './yupResolver'

function App() {

  return (
    <>
    <h1>FORM VALIDATIONS</h1>
    <h3>Registeration Form</h3>
      <FirstForms /> <br /><br />
      <h3>With Error handeling </h3>
      <SecondForm />
      <h3>A Complete Example With Requires</h3>
      <ThirdForms />
      <h3>Role Field</h3>
      <FourthForm />
      <h3>Using Context and Provider</h3>
      <ContextForm />
      <h3>Deeply Nested Within Component Trees</h3>
      {/* <ConnectForm /> */}
      <h3>usefieldarray/</h3>
      <MyForm />
      <h3>With Dot Notation on Correct Path</h3>
      <MyFormDot />
      {/* <h3>Yup or Zod Validation Libraries</h3>
      <YupResolver /> */}
      <h3>Old Form of Validation</h3>
      <OldApproch />
      {/* <h3>Old Form of Validation</h3>
      <NewApproch /> */}
    </>
  )
}

export default App
