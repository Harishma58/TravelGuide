import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import PlanItem from './components/PlanItem'
import './App.css'

// Replace your code here

class App extends Component {
  state = {plansData: [], isLoading: true}

  componentDidMount() {
    this.getPlansData()
  }

  getPlansData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    console.log(data)
    const updatedData = data.packages.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }))
    this.setState({plansData: updatedData, isLoading: false})
  }

  renderplansData = () => {
    const {plansData} = this.state

    return (
      <ul className="list-container">
        {plansData.map(each => (
          <PlanItem key={each.id} planDetails={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderplansData()
        )}
      </div>
    )
  }
}

export default App
