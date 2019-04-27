import React from 'react'
import DragonCard from './DragonCard'

const War = ({dragons, toggleDragon}) => (
  <div style={{ textAlign: 'center'}}>
    <div style={{float:'left', width:'40%', padding:'5%', backgroundColor:'#f98181'}}>
      <h1>At War</h1>
      {dragons.map(dragon => <DragonCard {...dragon} toggleDragon={toggleDragon} key={dragon.id}/>)}
    </div>
  </div>
)

export default War
