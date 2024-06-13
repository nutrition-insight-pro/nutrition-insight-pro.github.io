import { useState } from 'react';
import './App.css';
import { Button, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { CustomCredentials, CustomQuestion } from './components';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [password, setPassword] = useState<string>('');

  const [companyName, setCompanyName] = useState<string>('');
  const [locationOfOperation, setLocationOfOperation] = useState<string>('');
  const [areaOfSpeciality, setAreaOfSpeciality] = useState<string>('');
  const [typeOfAnimal, setTypeOfAnimal] = useState<string>('');

  const handleButtonClick = () => {
    console.log('Password:', password);
    console.log('Company Name:', companyName)
    console.log('Location of Operation:', locationOfOperation)
    console.log('Area of Specialty:', areaOfSpeciality)
    console.log('Type of Animal:', typeOfAnimal)
  };
  
  return (
    <div className="app">
      <div className='app-header'>
        {isMobile ?
          <>
            <Typography variant='h6' align='left' sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
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

            <CustomCredentials text='Your Credentials' credentials={password} setCredentials={setPassword} />

            <CustomQuestion text='Company Name' value={companyName} setValue={setCompanyName} />
            <CustomQuestion text='Location of Operation' value={locationOfOperation} setValue={setLocationOfOperation} />
            <CustomQuestion text='Area of Specialty' value={areaOfSpeciality} setValue={setAreaOfSpeciality} />
            <CustomQuestion text='Type of Animal' value={typeOfAnimal} setValue={setTypeOfAnimal} />

            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Button variant="contained" sx={{ backgroundColor: '#8D2881', '&:hover': { backgroundColor: '#732063' } }} onClick={handleButtonClick}>
                Submit
              </Button>
            </Grid>

          </Grid>
          <Grid item xs={12} md={6} style={{ paddingLeft: isMobile ? 0 : 20, marginTop: isMobile ? 30 : 0}}>
            <Typography align='left'>
              Segmentation
            </Typography>
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
