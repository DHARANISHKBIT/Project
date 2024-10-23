import { Box, Typography } from '@mui/material'
import React from 'react'
import Men from '../../assets/men.png'
import Buttons from './Buttons.jsx'
import Quatation from './Quatation.jsx'

function Lead() {
  return (
    <div className='Leadpage'>
      <Typography sx={{fontWeight:'bold',color:'#4E5A6B',fontSize:'14px'}}>Lead Details</Typography>
      <div style={{padding:'4% 2%'}}>
      <Box sx={{
        width:'100%',
        display:'flex',
        border:'1px solid gray',
        height:'12%',
        alignItems:'center',
        borderRadius:"5px",
        padding:'1%',
        gap:'5px'
      }}>
        <img src= {Men} style={{width:'10%',height:'75%',borderRadius:'5px'}}/>
        <div style={{height:'80%',width:'85%'}}>
        <div style={{display:'flex',height:'50%',gap:'5px',fontSize:'14px'}}>
        <Typography sx={{fontWeight:'bold'}}>Tom Cruise</Typography>
        <div style={{height:'98%',width:'20%',backgroundColor:'#eaeffb',
    borderRadius: "5px",padding:'1% 0%'}}><Buttons name="Prospect"/></div>
        </div>
        <div style={{display:'flex',gap:'5px',color:'gray'}}>
        <Typography sx={{fontSize:'12px'}}>+91 9090808012</Typography>
        <Typography  sx={{fontSize:'12px'}}>Tomcruise2515@gmail.com</Typography>
        </div>
        </div>
      </Box>
      </div>
    <div className='Q-deatils'>
      <Typography sx={{fontWeight:'bold',fontSize:'14px',color:'#4E5A6B'}}>Quotation Deatils</Typography>
      <Box sx={{display:"grid",gridTemplateColumns:'30% 30% 30%',gap:'5px',padding:'2% 0%',height:'40%',justifyContent:'space-evenly'}}>
    <Quatation names="LEASE START DATE" date="30 Jan 23"/>
    <Quatation names="LEASE START DATE" date="30 Jan 23"/>
    <Quatation names="LEASE START DATE" date="30 Jan 23"/>
    <Quatation names="LEASE START DATE" date="30 Jan 23"/>
    </Box>
    </div>
    </div>
  )
}

export default Lead
