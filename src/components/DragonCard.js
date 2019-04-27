import React from 'react'

const DragonCard = ({ atWar, name, description, image, id, toggleDragon}) => (
  <div>
    <h3>{name}</h3>
    <p>{description}</p>
    <img style={{ width: '100px' }} src={image} alt=""></img>
    <br />
    <button onClick={() => toggleDragon(id)}>{atWar ? 'Send Dragon Home' : 'Send Dragon to War'}</button>
  </div>
)

export default DragonCard
