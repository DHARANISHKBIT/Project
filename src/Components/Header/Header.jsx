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
      <Typography sx={{fontSize:'20px',marginTop:'-3px'}}>Create Quotation To Existing Lead</Typography>
      </Box>
     
       <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Casagrand</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Casagrand"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Casagrand</em>
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
