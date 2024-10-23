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
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));



function Primary({setOpenPri}) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div className='primary-page'>
      <Box sx={{
        width:'90%',
        backgroundColor:'#FEEAEA80',
        padding:'1% 2%',
        display:'flex',
        font:'bold',
        height:'6%',
        borderRadius:'5px',
        marginTop:'20px',
        alignItems:'center',
        justifyContent:'space-between'
        }}>
            <Typography sx={{color:'#B3776D'}}>Primary Princing Components</Typography> 
            <div style={{color:'#CED3DD'}}><ErrorOutlineIcon/></div>
      </Box>
      <Box sx={{width:'96%',height:'10%',padding:'5%',display:'flex',justifyContent:'space-evenly'}}>
        <Box sx={{width:'48%'}}> 
        <Typography sx={{fontSize:'12px',color:'#98A0AC'}}>Revenue Type</Typography>
        <Stack spacing={1} direction="row" sx={{marginTop:'10px'}}>
      <Button variant="contained">Lease</Button>
      <Button variant="outlined">Sales</Button>
      <Button variant="outlined">Manage</Button>
    </Stack>
        </Box>
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
      </Box>
      <Box sx={{width:'96%',height:'10',display:'flex',justifyContent:'space-between',padding:'2% 0%'}}>
        <Box sx={{width:'48%'}}>
        <Typography sx={{fontSize:'12px',color:'#98A0AC',width:'100%'}}>Tax Group For Princing Component</Typography>
        <FormControl sx={{ m: 1, minWidth: 225 }} size="small">
        <InputLabel sx={{color:'black',fontSize:'12px'}}>GST</InputLabel>
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
        <Box sx={{width:'48%'}}>
        <Typography sx={{fontSize:'12px',color:'#98A0AC'}}>Component Based On</Typography>
        <Stack spacing={1} direction="row" sx={{marginTop:'10px'}}>
      <Button variant="contained">Amount</Button>
      <Button variant="outlined">UOM</Button>
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
            <div style={{color:'#CED3DD'}}>SAR/Total</div>
      </Box>
      </Box>


        <Box sx={{width:'90%',height:"20%",display:'flex',justifyContent:'space-between',color:'gray',fontSize:'14px'}}>
            <Box sx={{width:'30%'}}>
        <Typography sx={{fontSize:"12px"}}>Maximum</Typography>
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={100} sx={{backgroundColor:'red'}}/>
    </Stack>
        <Stack spacing={1} direction="row" sx={{marginTop:'10px',width:'100%'}}>
      <Button variant="outlined" sx={{width:"100%",color:'black'}}>$ 190</Button>
    </Stack>
            </Box>
            <Box sx={{width:'30%'}}>

    <Typography sx={{fontSize:"12px"}}>Recommended</Typography>
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={75} sx={{backgroundColor:'red'}}/>
    </Stack>
        <Stack spacing={1} direction="row" sx={{marginTop:'10px',width:'100%'}}>
      <Button variant="outlined" sx={{width:"100%",color:'black'}}>$ 190</Button>
    </Stack>
            </Box>
            <Box sx={{width:'30%'}}>
    <Typography sx={{fontSize:"12px"}}>Minimum</Typography>
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={30} sx={{backgroundColor:'red'}}/>
    </Stack>
        <Stack spacing={1} direction="row" sx={{marginTop:'10px',width:'100%'}}>
      <Button variant="outlined" sx={{width:"100%",color:'black'}}>$ 190</Button>
    </Stack>
            </Box>
        </Box>
        <Box sx={{height:'10%',width:'90%',display:'flex',justifyContent:'space-between'}}>
        <Stack spacing={1} direction="row" sx={{marginTop:'10px',width:'20%',height:'70%'}}>
      <Button variant="outlined" sx={{width:"100%",color:'black'}} onClick={()=> setOpenPri(false)}>Back</Button>
    </Stack>
    <Stack spacing={0} direction="row" sx={{marginTop:'10px',width:'60%',height:'70%'}}>
      <Button variant="contained" sx={{width:"100%",color:'black',height:'100%',color:'white',fontSize:'13px'}}>Create Princing Component</Button>
    </Stack>
        </Box>
      
    </div>
  )
}
export default Primary
