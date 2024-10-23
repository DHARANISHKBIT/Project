import { Box, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import CabinIcon from '@mui/icons-material/Cabin';
import House from '../../assets/house.png'
import '../../Style/Popup.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

const Amen =[
  {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
 ]
function Amenities() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div style={{height:'96%',width:"95%",padding:'1% 2%',borderRadius:'5px',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Box sx={{width:'100%',
        height:'7%',
        display:'flex',
        justifyContent:'space-between',
        borderBottom:'1px solid gray',
        alignItems:'center'
      }}>
        <Typography sx={{fontWeight:'600'}}>Add Amenities</Typography>
        <CloseIcon/>
      </Box>
      <Box sx={{
        width:'90%',
        height:'8%',
        display:'flex',
        marginTop:'15px',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'1% 4%',
        borderRadius:'5px',
        backgroundColor:'#FEEAEA80',
        color:'#c89b94'
      }}>
        <div style={{width:'60%',display:'flex',gap:'5px'}}>
      <CabinIcon />
      <Typography sx={{color:'#B3776D',fontWeight:'bold'}}>05 Total Amenities</Typography>
        </div>
      <Typography>$ 200.00</Typography>
      </Box>
      <Typography  sx={{marginTop:'10px',width:'100%',textAlign:'start',fontSize:'14px',color:"#98A0AC"
      }}>Available Amenities</Typography>
      <div className='Amen-page'>
        {Amen.map((item,index)=>
        (
          // <div className='Amen-full'>
          <Box key={index} sx={{
            height:'15%',
            width:'96%',
            backgroundColor:'white',
            borderRadius:'5px',
            display:'flex',
            alignItems:'center',
            padding:'1%',
            border:'1px solid #E4E8EE'
          }}>
            <img  src={item.img} style={{width:'11%',height:'72%',borderRadius:'5px'}}/>
            <div className='Amen-name'>
              <div style={{fontWeight:'600',fontSize:'16px'}}>{item.name}</div>
              <div className='price-date'>
                <div >$ {item.price}</div>
                <div>{item.date}</div>
              </div>
            </div>
           
            <div>
      <Switch {...label} defaultChecked />
      {/* <Switch {...label} /> */}
    </div>
          </Box>
          // </div>
        ))}
       
      </div>
      <div style={{height:'10%',display:'flex',alignItems:'center',width:'100%',justifyContent:'center'}}>

<Stack  direction="row" spacing={2} sx={{width:"100%"}}>
<Button variant="contained" sx={{width:'100%',backgroundColor:'#5078E1'}}>Update & Save</Button>
</Stack>
</div>
    </div>
  )
}

export default Amenities
