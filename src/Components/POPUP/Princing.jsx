import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Primary from '../Princing/Primary.jsx'
import Seconary from '../Princing/Inventory.jsx';
import Onetime from '../Princing/Onetime.jsx'
import Price from '../Princing/Price.jsx'
import Inventory from '../Princing/Inventory.jsx'
import Parking from '../Princing/Parking.jsx';

const pricingItems = [
  { id: 1, label: "Primary", color: "#fde7e7" },
  { id: 2, label: "Secondary", color: "#e8e1fd" },
  { id: 3, label: "One Time Charges", color: "#e0f8f3" },
  { id: 4, label: "Refundables", color: "#e7f3fd" },
  { id: 5, label: "Inventory Item", color: "#fcf5dc" },
  { id: 6, label: "Parking Slot", color: "#fdebdc" },
];

function PricingTable() {
  const [openPri, setOpenPri] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); 

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item.id === 1) 
      {
      setOpenPri(true); 
    } else if (item.id === 2)
       {
      setOpenPri(true);
    }else if (item.id === 3)
      {
        setOpenPri(true);
      } 
      else if (item.id === 4)
      {
        setOpenPri(true);
      }
      else if (item.id === 5)
      {
        setOpenPri(true);
      }
      else if (item.id === 6)
      {
        setOpenPri(true);
      }
    else {
      setOpenPri(false);
    }
  };

  return (
    <div style={{ width: '94%', height: '96%', padding: "2%", display: 'flex', flexDirection: 'column', borderRadius: '10px' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', height: '10%', display: 'flex', alignItems: 'center', borderBottom: '1px solid gray' }}>
        Pricing Table
      </Typography>

      {!openPri ? (
       
        <div style={{ height: '90%', padding: "2% 0", display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '100%', alignItems: 'center' }}>
          {pricingItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '8px',
                backgroundColor: item.color,
                marginBottom: '12px',
                height: '12%',
                width: '92%',
                boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
                padding: '1%',
                gap: '15px',
                cursor: 'pointer', // Add pointer cursor for better UX
              }}
              onClick={() => handleItemClick(item)} // Handle item click
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    color: '#c44',
                    marginRight: '12px',
                  }}
                >
                  {`0${item.id}`}
                </Box>
                <Typography variant="body1" sx={{ fontWeight: '600', color: '#333' }}>
                  {item.label}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label="info" sx={{ color: '#888' }}>
                  <InfoOutlinedIcon />
                </IconButton>
                <ArrowForwardIosIcon sx={{ color: '#888', fontSize: '16px', marginLeft: '8px' }} />
              </Box>
            </Box>
          ))}
        </div>
      ) : (
        <div style={{ height: '90%' }}>
          {selectedItem && selectedItem.id === 1 && <Primary setOpenPri={setOpenPri} />} 
          {selectedItem && selectedItem.id === 2 && <Seconary setOpenPri={setOpenPri} />} 
          {selectedItem && selectedItem.id === 3 && <Onetime  setOpenPri={setOpenPri}/>}
          {selectedItem && selectedItem.id === 4 && <Price  setOpenPri={setOpenPri}/>}
          {selectedItem && selectedItem.id === 5 && <Inventory setOpenPri={setOpenPri}/>}
          {selectedItem && selectedItem.id === 6 && <Parking setOpenPri={setOpenPri} /> }
        </div>
      )}
    </div>
  );
}
export default PricingTable;
