import React, { useState } from 'react';
import { Grid, Typography, Button, Paper, Checkbox } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function InstructionPage2() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleBeginClick = () => {
    if (checked) {
      // Navigate to the next page if checkbox is checked
      navigate('/');
    }
  };

  return (
    <>
      <Grid container item xs={12} sx={{ bgcolor: 'lightblue', height: '50px' }}>
        <Typography variant='h6' sx={{ marginLeft: '5px' }}><b>Other Important Instructions</b></Typography>
      </Grid>
      <Paper sx={{ p: 2,  height: '55vh'}}>
        The instructions are not available in the chosen language.
      </Paper>
      <Grid container item xs={12} sx={{ display: 'flex', alignItems: 'center', pt: 2 }}>
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
        <Typography variant='body1' sx={{ ml: 1 }}>
          By clicking on this checkbox you're assuring that if any kind of cheating takes place we will cancel your paper.
        </Typography>
      </Grid>
      <Grid container item xs={12} sx={{  pt: 2 }}>
        <Link to="/">
          <Button variant="contained" style={{ alignItems:'left',marginLeft: '30px' }}>Previous</Button>
        </Link>
        <Button variant="contained" style={{ marginLeft: '300px'  }} disabled={!checked} onClick={handleBeginClick}>I'm ready to begin</Button>
        <Link to="/error">
          <Button variant="contained" style={{ alignItems:'right', marginLeft:'300px'}} disabled={checked}>Error</Button>
        </Link>
      </Grid>
    </>
  );
}

export default InstructionPage2;
