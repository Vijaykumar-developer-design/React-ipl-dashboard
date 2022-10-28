// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {listCards: [], isLoading: true}

  componentDidMount() {
    this.getCards()
  }

  getCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.team_image_url,
    }))

    this.setState({listCards: updatedData, isLoading: false})
  }

  getLoader = () => (
    //   testid="loader"
    <div className="load">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {listCards, isLoading} = this.state
    return (
      <div className="home-bg">
        <div className="heading">
          <img
            className="logo"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="head">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          this.getLoader()
        ) : (
          <ul className="list-items">
            {isLoading
              ? this.getLoader()
              : listCards.map(eachCard => (
                  <TeamCard details={eachCard} key={eachCard.id} />
                ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
