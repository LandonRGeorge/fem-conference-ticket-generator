export default function SubmitDetails({data}) {
  return (
    <>
      <section>
        <h2>Congrats, {data.fullName}!</h2>
        <p>Your ticket is ready.</p>
        <p>We've emailed your ticket to <span>{data.emailAddress}</span> and will send updates in the run up to the event
        </p>
      </section>
      <section>
        <div>
          <div>Coding Conf</div>
          <p>Jan 31, 2025 / Austin, TX</p>
        </div>
        <div>
          <img src={null} alt={null}/>
          <div>
            <p>{data.fullName}</p>
            <p>{data.githubUsername}</p>
          </div>
        </div>
        <div>
          Ticket stub here
        </div>
      </section>

    </>
  )
}