// Write your code here.
import './index.css'

const CardItem = props => {
  const {Item, Key} = props
  const {title, description, imgUrl, className} = Item
  return (
    <li className={`${className} card-container`}>
      <h1 className="heading1">{title}</h1>
      <p className="paragraph1">{description}</p>
      <div className="image-container">
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}
export default CardItem
