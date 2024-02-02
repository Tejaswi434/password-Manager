import './index.css'

const IndividualItem = props => {
  const {each, avoidDelete, checking} = props
  const {theWholeList, website, username, password, id} = each

  const deleting = () => {
    avoidDelete(id)
  }
  return (
    <li className="row">
      <div>
        <p>
          <span className="round">{website[0].toUpperCase()}</span>
        </p>
      </div>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        <p>{password}</p>
      </div>
      <div>
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete"
            onClick={deleting}
          />
        </button>
      </div>
    </li>
  )
}

export default IndividualItem
