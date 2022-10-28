// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  console.log(matchDetails)
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails
  const Loss = matchStatus === 'Lost'

  const color = Loss ? 'color-red' : 'color-green'

  return (
    <li className="card-details">
      <img
        className="team-image"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="c-team">{competingTeam}</p>
      <p className="c-team">{result}</p>
      <p className={color}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
