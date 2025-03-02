import React, {useState} from 'react'
import Form from './components/Form.jsx'
import Header from './components/Header.jsx'
import SubmitDetails from "./components/SubmitDetails.jsx";
import avatar from './assets/images/image-avatar.jpg'

function App() {
  const [data, setData] = React.useState({
    fullName: "",
    emailAddress: "",
    githubUsername: "",
    avatar: avatar,
  })

  const formSubmitted = data.fullName && data.emailAddress && data.githubUsername

  let content;
  if (formSubmitted) {
    content = <SubmitDetails data={data}/>
  } else {
    content = <Form setData={setData}/>
  }

  return (
    <main>
      <Header/>
      {content}
    </main>
  )
}

export default App
