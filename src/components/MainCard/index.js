import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import IndividualItem from '../SmallCard'

class MainCard extends Component {
  state = {
    theWholeList: [],
    website: '',
    userName: '',
    password: '',
    searching: '',
    tick: false,
  }

  web = event => {
    this.setState({website: event.target.value})
  }

  username = event => {
    this.setState({userName: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  avoidDelete = id => {
    this.setState(prevState => ({
      theWholeList: prevState.theWholeList.filter(each => each.id !== id),
    }))
  }

  addingData = event => {
    console.log('data')
    event.preventDefault()

    const {theWholeList, website, userName, password} = this.state

    const newAppointment = {
      id: uuidv4(),
      website,
      userName,
      password,
    }
    this.setState(prevState => ({
      theWholeList: [...prevState.theWholeList, newAppointment],
      website: '',
      userName: '',
      password: '',
    }))
  }

  searchbar = event => {
    this.setState({searching: event.target.value})
  }

  toggling = () => {
     const {tick} = this.state
    this.setState({tick: !tick})
  }

  render() {
    const {theWholeList, website, userName, password, searching} = this.state
    const filteredData = theWholeList.filter(every =>
      every.website.toLowerCase().includes(searching.toLowerCase()),
    )
    return (
      <div className="main-row">
        <div className="row">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="sizing-logo"
          />
        </div>
        <div className="second">
          <div className="blue-back">
            <p className="white">Add New Password</p>
            <form onSubmit={this.addingData}>
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.web}
                id="website"
                value={website}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="Enter UserName"
                onChange={this.username}
                id="username"
                value={userName}
              />
              <br />
              <br />
              <input
                placeholder="Enter Password"
                onChange={this.password}
                type="text"
                id="pass"
                value={password}
              />
              <br />
              <br />

              <button type="submit" className="end">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="decrease"
          />
        </div>
        <div className="second_box">
          <div className="rowing">
            <p>Your Passwords</p>
            <input
              placeholder="search"
              type="input"
              onChange={this.searchbar}
              value={searching}
            />
          </div>
          <hr />
          <div className="last">
            <input type="checkbox" id="check" onClick={this.checking} />
            <label htmlFor="check">Show Passwords</label>
          </div>
          <ul className="third">
            {filteredData.map(each => (
              <IndividualItem
                each={each}
                key={each.id}
                avoidDelete={this.avoidDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MainCard
