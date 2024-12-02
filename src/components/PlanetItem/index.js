// Write your code here

import './index.css'

const PlanetItem = props => {
  const {data} = props
  return (
    <div className="planetitem-container">
      <img src={data.imageUrl} alt={`planet ${data.name}`} className="image" />
      <h1 className="planet-name">{data.name}</h1>
      <p className="planet-des">{data.description}</p>
    </div>
  )
}

export default PlanetItem
