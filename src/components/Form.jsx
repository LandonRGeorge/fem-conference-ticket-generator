import React from "react";

export default function Form({data, setData}) {

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const _data = Object.fromEntries(formData)
    setData(_data)
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        Upload Avatar
      </div>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName"/>
      </div>
      <div>
        <label htmlFor="emailAddress">Email Address</label>
        <input type="email" id="emailAddress" name="emailAddress"/>
      </div>
      <div>
        <label htmlFor="githubUsername">GitHub Username</label>
        <input type="text" id="githubUsername" name="githubUsername"/>
      </div>
      <button>Generate My Ticket</button>
    </form>
  )
}