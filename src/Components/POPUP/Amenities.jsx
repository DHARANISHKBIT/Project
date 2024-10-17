import { Box, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import CabinIcon from '@mui/icons-material/Cabin';
import House from '../../assets/house.png'
import '../../Style/Popup.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Amen =[
  {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  // {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  // {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  // {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  // {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  // {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
  // {img:House,name:'Amenities name',price:'20.00',date:'Valid Feb22-12 Feb 23'},
]
function Amenities() {
  return (
    <div style={{height:'76%',width:"26%",padding:'1% 2%',border:'1px solid gray',borderRadius:'5px'}}>
      <Box sx={{width:'100%',
        height:'5%',
        display:'flex',
        justifyContent:'space-between',
        borderBottom:'1px solid gray'
      }}>
        <Typography>Add Amenities</Typography>
        <CloseIcon/>
      </Box>
      <Box sx={{
        width:'98%',
        height:'8%',
        display:'flex',
        marginTop:'15px',
        justifyContent:'space-between',
        border:'1px solid gray',
        alignItems:'center',
        padding:'0 1%',
        borderRadius:'5px',
        backgroundColor: "rgb(235, 235, 184)",
      }}>
        <div style={{width:'60%',display:'flex',gap:'5px'}}>
      <CabinIcon />
      <Typography  sx={{color:'orange'}}>05 Total Amenities</Typography>
        </div>
      <Typography>$ 200.00</Typography>
      </Box>
      <Typography  sx={{marginTop:'10px'}}>Available Amenities</Typography>
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
            border:'1px solid gray'
          }}>
            <img  src={item.img} style={{width:'13%',height:'70%',borderRadius:'5px'}}/>
            <div className='Amen-name'>
              <div>{item.name}</div>
              <div className='price-date'>
                <div>$ {item.price}</div>
                <div>{item.date}</div>
              </div>
            </div>
           
          </Box>
          // </div>
        ))}
       
      </div>
      <div style={{height:'10%',display:'flex',alignItems:'center',width:'100%',justifyContent:'center'}}>

<Stack  direction="row" spacing={2} >
<Button variant="contained" >Update & Save</Button>
</Stack>
</div>
    </div>
  )
}

export default Amenities
