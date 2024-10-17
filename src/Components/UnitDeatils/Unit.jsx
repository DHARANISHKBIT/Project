import { Box, Typography, Grid } from '@mui/material';
import React, { useState } from 'react';
import House from '../../assets/house.png'
import '../../Style/Header.css'
import BathtubIcon from '@mui/icons-material/Bathtub';
import AirlineSeatFlatOutlinedIcon from '@mui/icons-material/AirlineSeatFlatOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Princingpopup from '../POPUP/Princingpopup.jsx'

const house = [
  { img: House, name: "Jumeirah Estate", price: "1,200", details: "Jumeirah Golf Estate", sq: "2000 Sq.Ft" },
  { img: House, name: "Jumeirah Estate", price: "1,200", details: "Jumeirah Golf Estate", sq: "2000 Sq.Ft" },
  { img: House, name: "Jumeirah Estate", price: "1,200", details: "Jumeirah Golf Estate", sq: "2000 Sq.Ft" },
  { img: House, name: "Jumeirah Estate", price: "1,200", details: "Jumeirah Golf Estate", sq: "2000 Sq.Ft" },
];

function Unit() {
  const [princingPopup, setprincingPopup] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='Unit-page'>
      <Typography sx={{ fontWeight: '600', color: 'gray' }}>Unit Details</Typography>
      <Grid container   className='full-box'>
        {house.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index} className='Deatils-box'>
            <Box sx={{ width: '90%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <img src={item.img} style={{ width: "100%", height: '50%', borderRadius: '5px' }} />
              <div className='namepri'>
                <Typography sx={{ fontSize: '15px', fontWeight: '700' }}>{item.name}</Typography>
                <Typography sx={{ fontSize: '15px', fontWeight: '700' }}>$ {item.price}</Typography>
              </div>
              <div className='namepri'>
                <Typography sx={{ fontSize: '15px', color: 'gray' }}>{item.details}</Typography>
                <Typography sx={{ fontSize: '15px', color: 'gray' }}>{item.sq}</Typography>
              </div>
              <div className='icons'>
                <div><AirlineSeatFlatOutlinedIcon /> </div>
                <div><BathtubIcon /> </div>
                <div><HomeOutlinedIcon /> </div>
              </div>
              <div className='cus'>             
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <div style={{ fontSize: '10px' }}><AddIcon /></div>
         <div>Customise</div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => { handleClose(); setprincingPopup(true); }}>Add Pricing Component</MenuItem>
        {princingPopup && <Princingpopup onClose={() => setprincingPopup(false)} />}
        <MenuItem onClick={handleClose}>Add Amenities</MenuItem>
        <MenuItem onClick={handleClose}>Add Utilies</MenuItem>
        <MenuItem onClick={handleClose}>Add Discount</MenuItem>
        <MenuItem onClick={handleClose}>Remove Component</MenuItem>
      
      </Menu>
    
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
      
    </div>
  );
}

export default Unit;
