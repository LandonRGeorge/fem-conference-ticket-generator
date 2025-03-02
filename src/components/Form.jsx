import React from "react";
import FileDropZone from "./FileDropZone.jsx";


export default function Form({setData}) {

  const [avatar, setAvatar] = React.useState(null);

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const _data = Object.fromEntries(formData)
    _data.avatar = avatar
    setData(_data)
  }

  return (
    <div className="form-container">
      <div className="cta">
        <h2>Your Journey to Coding Conf 2025 Starts Here!</h2>
        <p>Secure your spot at next year's biggest coding conference.</p>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <FileDropZone avatar={avatar} setAvatar={setAvatar}/>
        <div>
        <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Landon George"/>
        </div>
        <div>
          <label htmlFor="emailAddress">Email Address</label>
          <input type="email" id="emailAddress" name="emailAddress" placeholder="landon.robert.george@gmail.com"/>
        </div>
        <div>
          <label htmlFor="githubUsername">GitHub Username</label>
          <input type="text" id="githubUsername" name="githubUsername" placeholder="@LandonRGeorge"/>
        </div>
        <button className="btn-submit">Generate My Ticket</button>
      </form>
    </div>
  )
}