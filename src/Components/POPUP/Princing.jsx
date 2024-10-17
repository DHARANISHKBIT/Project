import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const pricingItems = [
  { id: 1, label: "Primary", color: "#fde7e7" },
  { id: 2, label: "Secondary", color: "#e8e1fd" },
  { id: 3, label: "One Time Charges", color: "#e0f8f3" },
  { id: 4, label: "Refundables", color: "#e7f3fd" },
  { id: 5, label: "Inventory Item", color: "#fcf5dc" },
  { id: 6, label: "Parking Slot", color: "#fdebdc" },
];

function PricingTable() {
  return (
    <div style={{ width:'30%',height:'80%',padding:"2%",display:'flex',flexDirection:'column',borderRadius:'10px' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold',height:'10%',display:'flex',alignItems:'center' }}>
        Pricing Table
      </Typography>

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
            height:'90%',
            width:'100%',
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
            padding:'1%'
          }}
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
  );
}

export default PricingTable;
