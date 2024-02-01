import './index.css'

const IndividualItem = props => {
  const {each, avoidDelete} = props
  const {theWholeList, Website, UserName, Password, id} = each

  const deleting = () => {
    avoidDelete(id)
  }
  return (
    <li className="row">
      <div>
        <p>
          <span className="round">{Website[0].toUpperCase()}</span>
        </p>
      </div>
      <div>
        <p>{Website}</p>
        <p>{UserName}</p>
        <p>{Password}</p>
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
