import React from 'react';
import { Grid, Typography, Button,MenuItem,Select } from '@mui/material';
import { Link } from 'react-router-dom';
import errorImage from './errorImage.png';

function Error() {
  return (
    <>
      <Grid container spacing={2} justifyContent="center" style={{ paddingTop: '20px', marginLeft: '100px', paddingBottom: '20px' }}>
        <Grid item xs={8}>
          <img src={errorImage} style={{ height: '150px', marginLeft: '450px' }} alt="Error" />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center'}}>
        <Typography variant="body2" style={{marginLeft:'120px'}}>Change Language</Typography>
          <Select variant="outlined" defaultValue="en" style={{ width: '100px', height:'30px'}}>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="hi">Hindi</MenuItem>
            <MenuItem value="fr">French</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
            <MenuItem value="de">German</MenuItem>
          </Select>
          
        </Grid>
        <Grid item xs={12} style={{ marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="body1">
            <span style={{ color: 'red' }}>**Note:**</span> System records every single interruption during the Assessment.
          </Typography>
        </Grid>
        <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="body1" style={{ textAlign: 'center' }}>
            Interruption is recorded in the system due to one of the following possible reasons:
            <br />
            1) You were trying to minimize OR toggle Assessment Console.
            <br />
            2) You have pressed special keys from your keyboard which are not allowed during Assessment.
            <br />
            3) You have tried to move out of Assessment Console which is not allowed.
            <br />
            4) You have tried to refresh the page.
            <br />
            **This window will close down and you have to re-launch the Assessment only after it is unlocked. Please be advised not to move out of console during the assessment and not to navigate to other applications during the assessment.**
            <br />
            <br />
            <b>**How to proceed:**</b>
            <br />
            Please ensure that you do not move out of Assessment window during the assessment. Use only mouse to navigate.
          </Typography>
        </Grid>
      </Grid>
      <Link to="/">
        <Button variant="contained" style={{ marginLeft: '600px' }}>
          Back
        </Button>
      </Link>
    </>
  );
}

export default Error;
