import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" sx={{width:'100%',display:'flex',justifyContent:"center"}}>
        <div style={{width:'90%',display:'flex',justifyContent:'space-between'}}>
      <Button variant="outlined" sx={{color:'black'}}>Privious</Button>
      <div style={{width:'21%',display:'flex',justifyContent:'space-between'}}>
      <Button variant="outlined" sx={{color:'black'}}>Cancel</Button>
      <Button variant="contained">Create Quation</Button>
      </div>
      </div>
    </Stack>
  );
}