import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import individualItem from '../SmallCard'

class MainCard extends Component {
  state = {
    theWholeList: [],
    website: '',
    userName: '',
    password: '',
  }

  newData = event => {
    event.preventDefault()

    const {website, userName, password} = this.state

    const newAppointment = {
      id: uuidv4(),
      first: website,
      second: userName,
      third: password,
    }
    this.setState(prevState => ({
      theWholeList: [...prevState.theWholeList, newAppointment],
      website: '',
      userName: '',
      password: '',
    }))
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

  render() {
    const {theWholeList, website, userName, password} = this.state
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
            <form onSubmit={this.newData}>
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
            </form>
            <button type="submit" className="end">
              Add
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="decrease"
          />
        </div>
        <ul className="third">
          {theWholeList.map(each => (
            <individualItem key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default MainCard
