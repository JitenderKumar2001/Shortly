import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';

function Footer() {
  return (
    <div className='Footer'>
        <Box sx={{textAlign: 'center', color: 'white'}}>
        <Typography variant='h5' sx={{py: 3}}>
            Boost your links today
        </Typography>
        <Button sx={{ bgcolor: 'cyan', borderRadius: 10}}>Get Started</Button>
        </Box>
    </div>
  )
}

export default Footer