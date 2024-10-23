import { Box, Typography } from '@mui/material'
import React from 'react'
import '../../Style/Princing.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Inventory({setOpenPri}) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div className='primary-page'>
      <Box sx={{
        width:'92%',
        backgroundColor:'#EDE4FE80',
        padding:'1% 2%',
        display:'flex',
        height:'6%',
        borderRadius:'5px',
        marginTop:'20px',
        alignItems:'center',
        justifyContent:'space-between'
        }}>
            <Typography sx={{color:'#896DB3'}}>Inventory Item Component</Typography> 
            <div style={{color:'#CED3DD'}}><ErrorOutlineIcon/></div>
      </Box>
      <Box sx={{width:'96%',height:'10%',padding:'5%',display:'flex',justifyContent:'start'}}>
        <Box sx={{width:'48%'}}> 
        <Typography sx={{fontSize:'12px',color:'#98A0AC'}}>Revenue Type</Typography>
        <Stack spacing={1} direction="row" sx={{marginTop:'10px'}}>
      <Button variant="contained"  sx={{textTransform:'none'}}>Lease</Button>
      <Button variant="outlined"  sx={{textTransform:'none'}}>Sales</Button>
      <Button variant="outlined"  sx={{textTransform:'none'}}>Manage</Button>
      <Button variant="outlined"  sx={{textTransform:'none'}}>Stay</Button>
    </Stack>
        </Box>
      
      </Box>
      <Box sx={{width:'96%',height:'10',display:'flex',justifyContent:'space-between',padding:'2% 0%'}}>
      <Box sx={{width:'48%'}}>
        <Typography sx={{fontSize:'12px',color:'#98A0AC'}}>Princing Component</Typography>
        <FormControl sx={{ m: 1, minWidth: 225 }} size="small">
        <InputLabel sx={{color:'black'}}>Princing Component</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        onChange={handleChange}
      >
      </Select>
    </FormControl>
        </Box>
        <Box sx={{width:'48%'}}>
        <Typography sx={{fontSize:'12px',color:'#98A0AC',width:'100%'}}>Tax Group For Princing Component</Typography>
        <FormControl sx={{ m: 1, minWidth: 225 }} size="small">
        <InputLabel sx={{color:'black'}}>GST</InputLabel>
      <Select
         labelId="demo-simple-select-label"
         id="demo-simple-select"
         value={age}
         label="Age"
         onChange={handleChange}
      >
      </Select>
    </FormControl>
        </Box>
      </Box>
      <Box width={{width:'100%',height:'16%',marginTop:'15px',display:'flex'}}>
      <Box sx={{width:'44%',padding:'0% 3%'}}>
        <Typography sx={{fontSize:'12px',color:'#98A0AC'}}>Pricing Based On</Typography>
        <Stack spacing={1} direction="row" sx={{marginTop:'10px'}}>
      <Button variant="contained"  sx={{textTransform:'none'}}>Monthly</Button>
      <Button variant="outlined"  sx={{textTransform:'none'}}>Total</Button>
    </Stack>
    </Box>
      </Box>
      <Box width={{width:'90%',height:'16%',marginTop:'15px'}}>
      <Typography sx={{fontSize:'12px',color:'#98A0AC'}}>UOM Value</Typography>
      <Box sx={{
        width:'96%',
        backgroundColor:'#FEEAEA80',
        padding:'1% 2%',
        display:'flex',
        height:'40%',
        borderRadius:'5px',
        alignItems:'center',
        justifyContent:'space-between',
        }}>
            <Typography sx={{color:'#B3776D'}}>200</Typography> 
            <div style={{color:'#CED3DD'}}>%/Monthly</div>
      </Box>
      </Box>
       
        <Box sx={{height:'10%',width:'90%',display:'flex',justifyContent:'space-between'}}>
        <Stack spacing={1} direction="row" sx={{marginTop:'10px',width:'20%',height:'70%'}}>
      <Button variant="outlined" sx={{width:"100%",color:'black',textTransform:"none"}} onClick={()=> setOpenPri(false)}>Back</Button>
    </Stack>
    <Stack spacing={0} direction="row" sx={{marginTop:'10px',width:'60%',height:'70%'}}>
      <Button variant="contained" sx={{width:"100%",color:'black',height:'100%',color:'white',fontSize:'13px',textTransform:'none'}}>Create Princing Component</Button>
    </Stack>
        </Box>     
    </div>
  )
}
export default Inventory
