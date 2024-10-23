import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../Style/Header.css'
import { Box, Typography } from '@mui/material';


function Header() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box className='Header'>
        <Box className='Head-left'>
      <ArrowBackIosIcon sx={{width: "18px"}}/>
      <Typography sx={{fontSize:'16px',color:'#071741',fontWeight:'600'}}>Create Quotation To Existing Lead</Typography>
      </Box>
     
       <FormControl sx={{ m: 1, minWidth: 120,color:'#F5F7FA'}} size="small">
      <InputLabel id="demo-select-small-label" sx={{fontSize:'14px',color:'#010101'}}>Casagrand</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Casagrand"
        onChange={handleChange}
      >
        <MenuItem value="">
        </MenuItem>
        <MenuItem value={10}>Casagrand</MenuItem>
        <MenuItem value={20}>Casagrand</MenuItem>
        <MenuItem value={30}>Casagrand</MenuItem>
      </Select>
    </FormControl>
    </Box>
  );
}

export default Header;
