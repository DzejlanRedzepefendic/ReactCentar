import React from 'react'
import './App.css'
import TableComponent from './Practice/11_TableComponent/TableComponent'

const list = [
  {
    dessert: 'Desert(100g serving)',
    calories: 'Calories',
    fat: 'Fat(g)',
    carbs: 'Carbs(g)',
    protein: 'Protein(g)',
  },
  {
    dessert: 'Frozen yogurt',
    calories: '159',
    fat: '6',
    carbs: '24',
    protein: '4',
  },
  {
    dessert: 'Ice cream sandwich',
    calories: '237',
    fat: '9',
    carbs: '37',
    protein: '4.3',
  },
  {
    dessert: 'Eclair',
    calories: '262',
    fat: '16',
    carbs: '24',
    protein: '6',
  },
  {
    dessert: 'Cupcake',
    calories: '305',
    fat: '3.7',
    carbs: '67',
    protein: '4.3',
  },
  {
    dessert: 'Gingerbread',
    calories: '356',
    fat: '16',
    carbs: '49',
    protein: '3.9',
  },
]
const App = () => {
  return (
    <div className='table'>
      {list.map((value, index) => {
        return (
          <div
            key={index}
            style={{ backgroundColor: index % 2 === 0 ? 'red' : 'blue' }}
          >
            <TableComponent
              dessert={value.dessert}
              calories={value.calories}
              fat={value.fat}
              carbs={value.carbs}
              protein={value.protein}
            />
          </div>
        )
      })}
    </div>
  )
}

export default App
