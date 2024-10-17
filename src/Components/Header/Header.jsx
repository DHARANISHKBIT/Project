import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../../Style/Header.css'
import { Box, Typography } from '@mui/material';

// Array of objects for `top100Films`
const top100Films = [
  { label: 'Casagrand', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];
function Header() {
  return (
    <Box className='Header'>
        <Box className='Head-left'>
      <ArrowBackIosIcon sx={{width: "18px"}}/>
      <Typography sx={{fontSize:'20px',marginTop:'-3px'}}>Create Quotation To Existing Lead</Typography>
      </Box>
      <Autocomplete
        disablePortal
        options={top100Films}
        getOptionLabel={(option) => option.label}
        sx={{ width:"180px"}}
        renderInput={(params) => <TextField {...params} label="Casagrand" />}
      />
    </Box>
  );
}

export default Header;
