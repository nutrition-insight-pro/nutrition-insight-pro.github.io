import { useState } from 'react';
import './App.css';
import { Box, Button, Divider, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  
  return (
    <div className="app">
      <div className='app-header'>
        {isMobile ?
          <>
            <Typography variant='h6' align='left'>
              Animal Nutrition Classification Tool
            </Typography>
            <Typography align='left' gutterBottom>
              CDI × Evonik
            </Typography>
          </>
           : 
          <Typography variant='h4' align='left' gutterBottom>
            Animal Nutrition Classification Tool - CDI × Evonik
          </Typography>
        }
        <Divider sx={{ borderBottomWidth: 3, borderColor: '#8D2881' }}/>
      </div>
        <Grid container style={{ marginTop: 20 }}>
          <Grid item xs={12} md={6} style={{ paddingRight: isMobile? 0 : 20 }}>
            <Typography align='left'>
              Your Credentials
            </Typography>
            <FormControl sx={{ m: 1, margin: '10px 0px 30px 0px' }} fullWidth variant="outlined">
              {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
              <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Typography align='left'>
              Question 1
            </Typography>
            <FormControl sx={{ m: 1, margin: '10px 0px 30px 0px' }} fullWidth variant="outlined">
              <OutlinedInput/>
            </FormControl>

            <Typography align='left'>
              Question 2
            </Typography>
            <FormControl sx={{ m: 1, margin: '10px 0px 30px 0px' }} fullWidth variant="outlined">
              <OutlinedInput/>
            </FormControl>

            <Typography align='left'>
              Question 3
            </Typography>
            <FormControl sx={{ m: 1, margin: '10px 0px 30px 0px' }} fullWidth variant="outlined">
              <OutlinedInput/>
            </FormControl>

            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Button variant="contained" sx={{ backgroundColor: '#8D2881', '&:hover': { backgroundColor: '#732063' } }}>
                Submit
              </Button>
            </Grid>

          </Grid>
          <Grid item xs={12} md={6} style={{ paddingLeft: isMobile ? 0 : 20, marginTop: isMobile ? 30 : 0}}>
            <Typography align='left'>
              Segmentation
            </Typography>

            {/* <TextField fullWidth label="Text Box 2" variant="outlined" /> */}
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
