import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form.jsx'
import Header from './components/Header.jsx'
import CTA from "./components/CTA.jsx";
import SubmitDetails from "./components/SubmitDetails.jsx";

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = React.useState({
    fullName: "",
    emailAddress: "",
    githubUsername: "",
  })

  const formSubmitted = data.fullName && data.emailAddress && data.githubUsername

  return (
    <>
      <Header/>
      {!formSubmitted ? <><CTA /><Form data={data} setData={setData}/></>:
        <SubmitDetails data={data}/>
      }
    </>
  )
}

export default App
