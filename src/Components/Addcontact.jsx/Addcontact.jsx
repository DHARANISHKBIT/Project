import React from 'react'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import '../../Style/Header.css'
function Header() {
  return (
    <div className='first-line'>
      <div>Add Contact</div>
      <div style={{display:'flex',height:'100%',alignItems:'center'}}><KeyboardArrowRightOutlinedIcon/></div>
      <div style={{display:'flex',height:'100%',alignItems:'center'}}>Lead Details</div>
      <div style={{display:'flex',height:'100%',alignItems:'center'}}><KeyboardArrowRightOutlinedIcon/></div>
      <div style={{display:'flex',height:'100%',alignItems:'center'}}>Preview and Create Lead</div>
      <div style={{display:'flex',height:'100%',alignItems:'center'}}><KeyboardArrowRightOutlinedIcon/></div>
      <div style={{display:'flex',height:'100%',alignItems:'center'}}>Quotation Details</div>
      <div style={{display:'flex',height:'100%',alignItems:'center'}}><KeyboardArrowRightOutlinedIcon/></div>
      <div style={{display:'flex',height:'100%',alignItems:'center'}}>Preview and Create</div>
    </div>
  )
}

export default Header
