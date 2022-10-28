// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  console.log(latestMatchDetails)
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umPires,
    venue,
  } = latestMatchDetails
  return (
    <div className="second-card">
      <div>
        <h1 className="text">Latest Matches</h1>
        <div className="latest-card">
          <div>
            <p className="competingTeam">{competingTeam}</p>
            <p className="date-match">{date}</p>
            <p className="date-match">{venue}</p>
            <p className="date-match">{result}</p>
          </div>
          <img
            className="team-logo"
            alt={`latest match ${competingTeam}`}
            src={competingTeamLogo}
          />
          <div>
            <h1 className="date">First Innings</h1>
            <p className="date">{firstInnings}</p>
            <h1 className="date">Second Innings</h1>
            <p className="date">{secondInnings}</p>
            <h1 className="date">Man of The Match</h1>
            <p className="date">{manOfTheMatch}</p>
            <h1 className="date">Umpires</h1>
            <p className="date">{umPires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
