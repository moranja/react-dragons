import React from 'react'

const Header = ({value, changeValue}) => (
  <div>
    <h1>All Dragons:</h1>
    <input type="textarea" onChange={changeValue} value={value}></input>
    <br /><br /><br />
  </div>
)

export default Header
