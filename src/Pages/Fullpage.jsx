import React from 'react'
import Header from '../Components/Header/Header'
import Main from '../Components/Mainpage.jsx/Main'

function Fullpage() {
  return (
    <div style={{height:'100%',width:'100%'}}>
      <Header style={{height:'10%',width:'100%'}}/>
      <div style={{height:'90%',width:'100%',display:'flex',alignItems:'center',justifyContent:"center",
    
      }}>

      <Main />
      </div>
    </div>
  )
}

export default Fullpage
