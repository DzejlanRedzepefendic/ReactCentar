import React from 'react'

function ChangeMe(props) {
  return (
    <>
      <div
        className={`container ${props.isDark ? 'new' : 'dark'}`}
        style={{ width: '500px', height: '500px', margin: '5em' }}
      >
        <p className={`container ${props.isDark ? 'new' : 'dark'}`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
          consequatur sunt voluptatum officiis maiores ullam minima repellendus
          possimus repudiandae alias asperiores obcaecati, quo blanditiis sit
          natus! Deleniti magni tenetur aperiam.
        </p>
      </div>
    </>
  )
}

export default ChangeMe
