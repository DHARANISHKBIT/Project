import React from 'react'

function Quatation(props) {
  return (
    <div className='quatation'>
      <div style={{fontSize:'10px',color:'gray'}}>{props.names}</div>
      <div>{props.date}</div>
    </div>
  )
}
export default Quatation
