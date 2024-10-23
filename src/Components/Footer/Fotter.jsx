import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" sx={{width:'100%',display:'flex',justifyContent:"center"}}>
        <div style={{width:'95%',display:'flex',justifyContent:'space-between'}}>
      <Button variant="outlined" sx={{color:'#091B29',fontSize:'14px',borderColor:'#E4E8EE',fontWeight:'bold'}}>Privious</Button>
      <div style={{width:'18%',display:'flex',justifyContent:'space-between'}}>
      <Button variant="outlined" sx={{color:'#091B29',fontSize:'14px',borderColor:'#E4E8EE',fontWeight:'bold'}}>Cancel</Button>
      <Button variant="contained" sx={{color:'#fdfdfd',fontSize:'14px',borderColor:'#E4E8EE',fontWeight:'bold'}}>Create Quation</Button>
      </div>
      </div>
    </Stack>
  );
}