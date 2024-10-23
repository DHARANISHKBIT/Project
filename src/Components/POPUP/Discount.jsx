import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import House from '../../assets/house.png'
import { FaBed, FaBath, FaHome } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaChevronDown } from "react-icons/fa";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const pricing = [
    { billName: 'Bill Name Here', price: '$1,000' },
    { billName: 'Bill Name Here', price: '$1,000' },
    { billName: 'Bill Name Here', price: '$1,000' },
    { billName: 'Bill Name Here', price: '$1,000' },
    { billName: 'Bill Name Here', price: '$1,000' },
    { billName: 'Bill Name Here', price: '$1,000' },
    { billName: 'Bill Name Here', price: '$1,000' },
  ];
function Discount() {
  return (
    <div className='Discount-page'>
     <Box sx={{width:'96%',height:'7%',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid gray',padding: "0 2%"}}>
        <Typography sx={{fontSize:'16px',fontWeight:'bold'}}>Add Discount To Unit</Typography>
        <CloseIcon/>
        </Box>
     <div className='left-right'>
      <div className='left-side'>
        <Box sx={{width:'100%',height:'30%',display:'flex'}}>
            <img  
            src={House}
             style={{
                width:'55%',
                height:'95%',
                borderRadius:'10px',
                display:'flex',
                alignItems:'center'
            }}/>
            <Box sx={{ width: '100%', height: '100%',padding:'0 1%'}}>
      <Grid container spacing={1} sx={{height:'100%'}}>
        <Grid item xs={6}>
          <img 
            src={House} 
            style={{ 
              width: '100%', 
              height: '100%', 
              borderRadius: '10px' 
            }} 
            alt="House" 
          />
        </Grid>
        <Grid item xs={6}>
          <img 
            src={House} 
            style={{ 
              width: '100%', 
              height: '100%', 
              borderRadius: '10px' 
            }} 
            alt="House" 
          />
        </Grid>
        <Grid item xs={6}>
          <img 
            src={House} 
            style={{ 
              width: '100%', 
              height: '100%', 
              borderRadius: '10px' 
            }} 
            alt="House" 
          />
        </Grid>
        <Grid item xs={6}>
          <img 
            src={House} 
            style={{ 
              width: '100%', 
              height: '100%', 
              borderRadius: '10px' 
            }} 
            alt="House" 
          />
        </Grid>
      </Grid>
    </Box>

        </Box>
        <Box sx={{width:'100%',height:'15%',padding:'3% 0%',display:'flex',flexDirection:'column',justifyContent:'space-around',
    borderBottom:'1px solid #98A0AC'}}>
            <div className='name'>
            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Jumeirah Estate</Typography>
            <div className='button-dis'>
                UNT-1234
            </div>
            </div>
            <div style={{fontSize:"14px",color:"#4E5A6B"}}>Rubix Apartment,K Tower, Floor 1</div>
            <div className="property-detail">
      <div className="detail-item">
        <FaBed className="icon" />
        <span>2</span>
      </div>
      <div className="separator">•</div>
      <div className="detail-item">
        <FaBath className="icon" />
        <span>2</span>
      </div>
      <div className="separator">•</div>
      <div className="detail-item">
        <FaHome className="icon" />
        <span>2BHK</span>
      </div>
      <div className="separator">•</div>
      <div className="detail-item">
        <CheckBoxOutlineBlankIcon className="icon" />
        <div>2000</div>
      </div>
    </div>
        </Box>
            <Box sx={{width:'96%',display:'flex',justifyContent:'space-between',padding:'1%',height:'8%'}}>
            <div style={{alignItems:'center',display:'flex',width:'25%',height:'80%',justifyContent:'space-between'}}>
            <FiBook />
            <div>Hand Book</div>
            </div>
            <div style={{color:'blue',alignItems:'center',display:'flex',width:'35%',height:'80%'}}>
                View / Download
            </div>
            </Box>
      </div>
      <div className='right-side'>
        <div className='right-page'>
      <div style={{ marginBottom: '10px',fontSize:'14px',fontWeight:'bold'}}>UNIT PRICE DEATIL</div>
      <ul style={{ listStyleType: 'none', padding: '0', margin: '0',width:'100%',height:'85%',overflowY:'scroll',scrollbarWidth:'none'}}>
        {pricing.map((item, index) => (
            <li 
            key={index} 
            style={{ 
                padding: '10px 0', 
                borderBottom: '1px solid #98A0AC', 
                width:'96%',
                height:'13%',
                padding:'2%',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-evenly'
            }}
            >
            <div   style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                color:'#4E5A6B',
                fontWeight:'600'
                }}>
              <div>{item.billName}</div>
            <span style={{ fontWeight: 'bold' }}>{item.price}</span>
                </div>
                <div  style={{ 
                display: 'flex', 
                justifyContent: 'space-between', }}>
                  <div style={{ fontSize: '0.9em', color: '#888' }}>Discount: {item.discount}</div>
                  <div 
                  style={{
                    display:'flex',
                    width:'32%',
                    border:'1px solid #E4E8EE',
                    justifyContent:'space-between',
                    padding:'0% 1%',
                    color:'#E4E8EE',
                    borderRadius:'5px'}}>
                      <div style={{width:'50%',borderRight:'1px solid #E4E8EE'}}>100.000</div>
                      <div style={{width:'45%',display:'flex',height:'100%',alignItems:'center',justifyContent:'center',gap:'5px',color:'#010101',fontSize:'12px',fontWeight:'bold'}}><div>AED</div><div style={{height:'60%'}}>< FaChevronDown /></div></div></div>
                </div>
          </li>
        ))}
      </ul>
      <div className='last-box'>
        <div>Final Total</div>
        <div>$1,200</div>
     </div>
      </div>
     <div style={{height:'10%',display:'flex',alignItems:'center',width:'100%',justifyContent:'center'}}>
<Stack  direction="row" spacing={2} sx={{width:"100%"}}>
<Button variant="contained" sx={{width:'100%'}}>Apply Discount</Button>
</Stack>
</div>
     </div>
    </div>
    </div>
  )
}
export default Discount
