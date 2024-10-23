import { Box, Typography, Grid } from '@mui/material';
import React, { useState } from 'react';
import House from '../../assets/house.png';
import '../../Style/Header.css';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Amenpopup from '../POPUP/Amenpopup.jsx';
import Utility from '../POPUP/Utilitypopup.jsx';
import { FaBed, FaBath, FaHome } from "react-icons/fa";
import Princingpopup from '../POPUP/Princingpopup.jsx';
import Discountpopup from '../POPUP/Discpopup.jsx';
import Removepopup from '../POPUP/Removepopup.jsx';
import Homepopup from '../POPUP/Homepopup.jsx';

const house = [
  { img: House, name: "Jumeirah Estate", price: "1,200", details: "Jumeirah Golf Estate", sq: "2000 Sq.Ft" },
  { img: House, name: "Jumeirah Estate", price: "1,200", details: "Jumeirah Golf Estate", sq: "2000 Sq.Ft" },
  { img: House, name: "Jumeirah Estate", price: "1,200", details: "Jumeirah Golf Estate", sq: "2000 Sq.Ft" },
  { img: House, name: "Jumeirah Estate", price: "1,200", details: "Jumeirah Golf Estate", sq: "2000 Sq.Ft" },
];

function Unit() {
  const [princingPopup, setprincingPopup] = useState(false);
  const [AmenPopup, setAmenPopup] = useState(false);
  const [UtiPopup, setUtiPopup] = useState(false);
  const [DisPopup, setDisPopup] = useState(false);
  const [RemPopup, setRemPopup] = useState(false);
  const [activeCard, setActiveCard] = useState(null); // Track the active card's index
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
      <Typography sx={{ fontWeight: 'bold', color: '#4E5A6B', fontSize: '14px' }}>Unit Details</Typography>
      <Grid container className='full-box'>
        {house.map((item, index) => (
          <Grid
            item xs={12} sm={5} md={5} lg={5.8}
            key={index}
            className='Deatils-box'
            sx={{ marginBottom: '10px' }}
            onClick={() => setActiveCard(index)}
          >
            <Box sx={{ width: '90%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <img src={item.img} style={{ width: "100%", height: '50%', borderRadius: '5px' }} />
              <div className='namepri'>
                <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>{item.name}</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>$ {item.price}</Typography>
              </div>
              <div className='namepri'>
                <Typography sx={{ fontSize: '12px', color: '#98A0AC' }}>{item.details}</Typography>
                <Typography sx={{ fontSize: '12px', color: '#98A0AC', fontWeight: 'normal' }}>{item.sq}</Typography>
              </div>
              <div className='icons'>
                <div className="property-details">
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
                </div>
              </div>
              <div className='cus'>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <div style={{ fontSize: '12px' }}><AddIcon /></div>
                  <div style={{ fontSize: '12px' }}>Customise</div>
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
                  <MenuItem onClick={() => { setprincingPopup(true) }} sx={{ borderBottom: '1px solid #F5F7FA' }}>Add Pricing Component</MenuItem>
                  {princingPopup && <Princingpopup onClose={() => setprincingPopup(false)} />}

                  <MenuItem onClick={() => { setAmenPopup(true) }} sx={{ borderBottom: '1px solid #F5F7FA' }}>Add Amenities</MenuItem>
                  {AmenPopup && <Amenpopup onClose={() => setAmenPopup(false)} />}

                  <MenuItem onClick={() => { setUtiPopup(true) }} sx={{ borderBottom: '1px solid #F5F7FA' }}>Add Utilies</MenuItem>
                  {UtiPopup && <Utility onClose={() => setUtiPopup(false)} />}

                  <MenuItem onClick={() => { setDisPopup(true) }} sx={{ borderBottom: '1px solid #F5F7FA' }}>Add Discount</MenuItem>
                  {DisPopup && <Discountpopup onClose={() => setDisPopup(false)} />}

                  <MenuItem onClick={() => { setRemPopup(true) }}>Remove Component</MenuItem>
                  {RemPopup && <Removepopup onClose={() => setRemPopup(false)} />}
                </Menu>
              </div>
            </Box>
            {activeCard === index && <Homepopup onClose={() => setActiveCard(null)} />}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Unit;
