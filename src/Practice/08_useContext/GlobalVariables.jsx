import { AppContext } from './Context'
import React from 'react'

function GlobalVariables(props) {
  const value = React.useContext(AppContext)

  return <div>{value}</div>
}
export default GlobalVariables
