import './index.css'

const PlanItem = props => {
  const {planDetails} = props
  const {id, name, imageUrl, description} = planDetails

  return (
    <li className="list-item">
      <img src={imageUrl} alt={name} className="img" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}
export default PlanItem
