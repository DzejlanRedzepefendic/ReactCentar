import React from 'react'
import './App.css'
function App() {
  const data = [
    {
      id: 'a',
      picture: 'https://www.svgrepo.com/show/78685/diagram.svg',
      header: 'Shooting Stars',
      paragraph:
        'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    },
    {
      id: 'b',
      picture: 'https://www.svgrepo.com/show/94613/scissors.svg',
      header: 'The Catalyzer',
      paragraph:
        'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    },
    {
      id: 'c',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg',
      header: 'Neptune',
      paragraph:
        'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    },
    {
      id: 'd',
      picture: 'https://www.svgrepo.com/show/56810/flag.svg',
      header: 'Melanchole',
      paragraph:
        'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    },
    {
      id: 'e',
      picture:
        'https://www.nicepng.com/png/full/4-47897_png-file-svg-crescent-moon-svg.png',
      header: 'Bunker',
      paragraph:
        'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    },
    {
      id: 'f',
      picture: 'https://pic.onlinewebfonts.com/svg/img_464612.png',
      header: 'Ramona Falls',
      paragraph:
        'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
    },
  ]
  return (
    <div className='content'>
      <div className='first-part'>
        <h1>Pitchfork Kickstarter Taxidermy</h1>
        <p style={{ fontSize: '19px', color: 'gray' }}>
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table.
        </p>
      </div>
      <div className='second-part'>
        {data.map((value) => {
          return (
            <div className={value.id}>
              <img src={value.picture} alt='' className='slike' />
              <h2>{value.header}</h2>
              <p>{value.paragraph}</p>
            </div>
          )
        })}
      </div>
      <div className='bu'>
        <button className='btn'>Button</button>
      </div>
    </div>
  )
}

export default App
