import React, {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCapital: 'NEW_DELHI', // Initially selecting the first capital
    }
  }

  handleCapitalChange = event => {
    this.setState({selectedCapital: event.target.value})
  }

  render() {
    const {countryAndCapitalsList} = this.props
    const {selectedCapital} = this.state

    // Finding the selected capital object
    const selectedCapitalObject = countryAndCapitalsList.find(
      capital => capital.id === selectedCapital,
    )
    const selectedCountry = selectedCapitalObject
      ? selectedCapitalObject.country
      : ''

    return (
      <div className="capitals-container">
        <h1 className="main-heading">Countries And Capitals</h1>
        <select value={selectedCapital} onChange={this.handleCapitalChange}>
          {countryAndCapitalsList.map(capital => (
            <option key={capital.id} value={capital.id}>
              {capital.capitalDisplayText}
            </option>
          ))}
        </select>
        <p>
          {selectedCapitalObject
            ? selectedCapitalObject.capitalDisplayText
            : ''}{' '}
          is the capital of {selectedCountry}
        </p>
      </div>
    )
  }
}

export default Capitals
