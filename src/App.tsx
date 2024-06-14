import { useState } from 'react';
import './App.css';
import { Box, Button, Chip, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { CustomCredentials, CustomQuestion } from './components';
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
  const [response, setResponse] = useState<{classification: string, reason1: string, reason2: string, reason3: string}>
    ({ classification: '', reason1: '', reason2: '', reason3: ''});

  // const handleButtonClick = () => {
  //   console.log('Password:', apiKey);
  //   console.log('Company Name:', companyName)
  //   console.log('Location of Operation:', locationOfOperation)
  //   console.log('Area of Specialty:', areaOfSpeciality)
  //   console.log('Type of Animal:', typeOfAnimal)
  //   console.log(response)
  // };

  const handleSubmit = async () => {
    try {
      setButtonDisabled(true);
      const result = await apiService.callChatGPT(apiKey, companyName, locationOfOperation, areaOfSpeciality, typeOfAnimal);
      setButtonDisabled(false);
      // setResponse(result);
      setResponse({
        classification: 'commodity',
        reason1: 'Product Range: Requires a variety of feed ingredients for high-quality turkey production.',
        reason2: 'Sustainability Focus: Commitment to sustainable and high-quality production necessitates specialty products.',
        reason3: 'Similar companies maintain a balanced use of commodity and specialty products for comprehensive nutrition.'
      })
    } catch (error) {
      console.error('Error fetching response from ChatGPT:', error);
      // setResponse('An error occurred while fetching the response.');
      setButtonDisabled(false);
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
            {/* <CustomQuestion text='Area of Specialty' value={areaOfSpeciality} setValue={setAreaOfSpeciality} /> */}
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

            <Box 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                width: '100%',
                maxWidth: '600px',
              }}
            >
              <Chip 
                label= {response.classification === '' ? 'Commodity Nutrition' : 'Commodity Nutrition (65%)'}
                sx={{ 
                  width: '100%', 
                  marginBottom: '10px',
                  justifyContent: 'flex-start',
                  paddingLeft: '5px',
                  marginTop: '10px',
                  backgroundColor: response.classification === 'commodity' ? 'green': '',
                  color: response.classification === 'commodity' ? 'white' : '',
                  fontSize: '1rem',
                }} 
              />
              <Chip 
                label={response.classification === '' ? 'Specialty Nutrition' : 'Specialty Nutrition (35%)'}
                variant='outlined'
                sx={{ 
                  width: '100%', 
                  marginBottom: '30px',
                  justifyContent: 'flex-start',
                  paddingLeft: '5px',
                  backgroundColor: response.classification === 'specialty' ? 'green': '',
                  color: response.classification === 'specialty' ? 'white' : '',
                  fontSize: '1rem',
                }} 
              />
            </Box>

            <Typography align='left'>
              Reasoning
            </Typography>

            <Box
              sx={{
                marginTop: '10px',
                display: 'inline-block',
                padding: '16.5px 14px',
                border: '1px solid rgba(0, 0, 0, 0.23)',
                borderRadius: '4px',
                '&:hover': {
                  borderColor: 'rgba(0, 0, 0, 0.87)',
                },
                '&:focus-within': {
                  borderColor: 'rgba(0, 0, 0, 0.87)',
                  boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.87)',
                },
                minHeight: '298px',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <Typography align='left'>
                {response.reason1 !== '' ? '- ': ''}{response.reason1}
              </Typography>
              <Typography align='left'>
                {response.reason2 !== '' ? '- ': ''}{response.reason2}
              </Typography>
              <Typography align='left'>
                {response.reason3 !== '' ? '- ': ''}{response.reason3}
              </Typography>
            </Box>
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
