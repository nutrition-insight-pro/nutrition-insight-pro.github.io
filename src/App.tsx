import { useState } from 'react';
import './App.css';
import { Button, Chip, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { CustomCredentials, CustomQuestion } from './components';
import ReactTypingEffect from 'react-typing-effect';
import apiService from './chatGPTApi';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [apiKey, setApiKey] = useState<string>('');

  const [companyName, setCompanyName] = useState<string>('');
  const [locationOfOperation, setLocationOfOperation] = useState<string>('');
  const [areaOfSpeciality, setAreaOfSpeciality] = useState<string>('');
  const [typeOfAnimal, setTypeOfAnimal] = useState<string>('');

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [response, setResponse] = useState<string>('');

  const handleButtonClick = () => {
    console.log('Password:', apiKey);
    console.log('Company Name:', companyName)
    console.log('Location of Operation:', locationOfOperation)
    console.log('Area of Specialty:', areaOfSpeciality)
    console.log('Type of Animal:', typeOfAnimal)
    console.log(response)
  };

  const handleSubmit = async () => {
    try {
      setButtonDisabled(true);
      const result = await apiService.callChatGPT(apiKey, companyName);
      setButtonDisabled(false);
      setResponse(result.choices[0].message.content);
    } catch (error) {
      console.error('Error fetching response from ChatGPT:', error);
      setResponse('An error occurred while fetching the response.');
    }
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

            <CustomCredentials text='Your Credentials' credentials={apiKey} setCredentials={setApiKey} />

            <CustomQuestion text='Company Name' value={companyName} setValue={setCompanyName} />
            <CustomQuestion text='Location of Operation' value={locationOfOperation} setValue={setLocationOfOperation} />
            <CustomQuestion text='Area of Specialty' value={areaOfSpeciality} setValue={setAreaOfSpeciality} />
            <CustomQuestion text='Type of Animal' value={typeOfAnimal} setValue={setTypeOfAnimal} />

            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                variant="contained"
                disabled={apiKey === '' || companyName === '' || buttonDisabled}
                onClick={handleSubmit}
                sx={{ backgroundColor: '#8D2881', '&:hover': { backgroundColor: '#732063' } }} 
              >
                Submit
              </Button>
            </Grid>

          </Grid>
          <Grid item xs={12} md={6} style={{ paddingLeft: isMobile ? 0 : 20, marginTop: isMobile ? 30 : 0}}>
            <Typography align='left'>
              Segmentation
            </Typography>
            
            {/* <Chip label="Chip Filled" sx={{ margin: '10px 0px 30px 0px' }}/>

            <Chip label="Chip Outlined" sx={{ margin: '10px 0px 30px 0px' }} variant="outlined" /> */}

            <Typography align='left' sx={{ margin: '10px 0px 30px 0px' }}>
              {response}
            </Typography>
            
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
