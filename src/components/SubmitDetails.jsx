import logo from '../assets/images/logo-full.svg'
import patternTicket from '../assets/images/pattern-ticket.svg'
import iconGithub from '../assets/images/icon-github.svg'

export default function SubmitDetails({data}) {
  return (
    <div className="submitted">
      <div className="submitted-header">

        <h2>Congrats, <span>{data.fullName}!</span></h2>
        <p>Your ticket is ready.</p>
      </div>
      <div className="submitted-details">
        <p>We've emailed your ticket to <span>{data.emailAddress}</span> and will send updates in the run up to the
          event</p>
      </div>

      <section className="ticket-container">
        <img src={patternTicket}/>
        <div className="ticket-outer">
          <div className="ticket-inner">
            <div>
              <div><img src={logo} alt=""/></div>
              <p className="event-date">Jan 31, 2025 / Austin, TX</p>
            </div>
            <div className="ticket-personal-details">
              <div>
                <img className="ticket-avatar" src={data.avatar}/>
              </div>
              <div>
                <p className="ticket-personal-details__name">{data.fullName}</p>
                <div className="ticket-personal-details__github">
                  <img src={iconGithub} alt=""/>
                  <p>{data.githubUsername}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ticket-number">#01609</div>
      </section>


    </div>
  )
}