import React from 'react'
import DragonCard from './DragonCard'

const Home = ({dragons, toggleDragon}) => (
  <div style={{ textAlign: 'center'}}>
    <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}} >
      <h1>At Home</h1>
      {dragons.map(dragon => <DragonCard {...dragon} toggleDragon={toggleDragon} key={dragon.id}/>)}
    </div>
  </div>
)

export default Home
