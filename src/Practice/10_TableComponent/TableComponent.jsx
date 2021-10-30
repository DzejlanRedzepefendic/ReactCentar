import React from 'react'
import './TableComponent.css'
const TableComponent = (props) => {
  const { dessert, calories, fat, carbs, protein } = props
  return (
    <div className='blaBla'>
      <p>{dessert}</p>
      <p>{calories}</p>
      <p>{fat}</p>
      <p>{carbs}</p>
      <p>{protein}</p>
    </div>
  )
}

export default TableComponent
