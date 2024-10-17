import React from 'react'
import '../../Style/Main.css'
import Addcontact from '../Addcontact.jsx/Addcontact.jsx'
import Lead from '../LeadDeatils/Lead.jsx'
import Unit from '../UnitDeatils/Unit.jsx'
import Summary from '../SUmmary/Summary'
import Fotter from '../Footer/Fotter.jsx'
function Main() {
  return (
    <div className='Main-page'>
      <Addcontact />
      <div style={{display:'flex',height:'80%',width:'100%',justifyContent:'space-between'}}>
        <div style={{height:'100%',width:'30%'}}>
        <Lead />
        </div>
        <div  style={{height:'100%',width:'40%'}}>
        <Unit />
        </div>
        <div  style={{height:'100%',width:'30%'}}>
        <Summary />
        </div>
       
      </div>
      <div className='fott'>
        <Fotter />
      </div>
    </div>
  )
}

export default Main
