// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {latestMatch: {}, matchCards: [], teamUrl: '', isLoading: true}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log(data)
    const updatedData = {
      latestMatches: data.latest_match_details,
      recentMatches: data.recent_matches,
      bannerUrl: data.team_banner_url,
    }
    const {latestMatches, recentMatches, bannerUrl} = updatedData
    const updatedLatestMatch = {
      competingTeam: latestMatches.competing_team,
      competingTeamLogo: latestMatches.competing_team_logo,
      date: latestMatches.date,
      id: latestMatches.id,
      firstInnings: latestMatches.first_innings,
      manOfTheMatch: latestMatches.man_of_the_match,
      matchStatus: latestMatches.match_status,
      result: latestMatches.result,
      secondInnings: latestMatches.second_innings,
      umPires: latestMatches.umpires,
      venue: latestMatches.venue,
    }

    const updatedRecentMatches = recentMatches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      id: eachMatch.id,
      firstInnings: eachMatch.first_innings,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umPires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))
    this.setState({
      latestMatch: updatedLatestMatch,
      matchCards: updatedRecentMatches,
      teamUrl: bannerUrl,
      isLoading: false,
    })
  }

  getSpinner = () => (
    //    testid="loader"
    <div className="loading">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  renderPage = () => {
    const {teamUrl, latestMatch, matchCards} = this.state
    return (
      <div className="bg">
        <img className="banner" alt="team banner" src={teamUrl} />
        <LatestMatch latestMatchDetails={latestMatch} />
        <ul className="list-elements">
          {matchCards.map(each => (
            <MatchCard matchDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="click-bg">
        {isLoading ? this.getSpinner() : this.renderPage()}
      </div>
    )
  }
}

export default TeamMatches
