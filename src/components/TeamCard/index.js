// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, imageUrl} = details
  return (
    <Link className="link" to={`/team-matches/${id}`}>
      <li className="team-card">
        <img className="team-card-img" src={imageUrl} alt={name} />
        <p className="team-text">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
