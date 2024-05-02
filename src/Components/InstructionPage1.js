import React from 'react';
import { Grid, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import LooksOneSharpIcon from '@mui/icons-material/LooksOneSharp';
import LooksTwoSharpIcon from '@mui/icons-material/LooksTwoSharp';
import Looks3SharpIcon from '@mui/icons-material/Looks3Sharp';
import Looks4SharpIcon from '@mui/icons-material/Looks4Sharp';
import Looks5SharpIcon from '@mui/icons-material/Looks5Sharp';

function InstructionPage1() {
  return (
    <>
      <Grid item xs={12} sx={{ bgcolor: 'lightblue', height: '50px' }}>
        <Typography variant='h6' sx={{ marginLeft: '5px' }}><b>Instructions</b></Typography>
      </Grid>
      <Grid container spacing={2}>
        <Paper sx={{ p: 2,  height: '68vh'}} >
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center' }}>Please read the instructions carefully</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" style={{ marginLeft: '20px' }}><b><u>General Instructions:</u></b></Typography>
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: 1 }}>
            <ol>
              <li>Total duration of examination is 120 minutes.</li>
              <li>The clock will be set at the server. The countdown timer in the top right of the screen will display
                the remaining time available for you to complete the examination. When the timer reaches zero, the
                examination will be end by itself. You will not be required to submit or end your examination.</li>
              <li>The question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:
                <br></br>
                <LooksOneSharpIcon style={{ color: 'grey' }} /> You have not visited the question yet.
                <br></br>
                <LooksTwoSharpIcon style={{ color: 'red' }} /> You have not answered the question.
                <br></br>
                <Looks3SharpIcon style={{ color: 'green' }} /> You have answered the question.
                <br></br>
                <Looks4SharpIcon /> You have not answered the question but have marked for the question for review.
                <br></br>
                <Looks5SharpIcon /> The questions(s) "Answered and Marked for Review" will be considered for evaluation.
                <br></br>
                The marked for Review status for a question simply indicates that you will visit the question again.
              </li>
            </ol>
          </Grid>
        </Paper>
        {/* Next Button */}
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'left', pt: 2 }}>
          <Button variant="contained" disabled style={{ marginLeft: '20px' }}>Previous</Button>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'right', pt: 2 }}>
          {/* Use Link to navigate to InstructionPage2 */}
          <Link to="/instruction2">
            <Button variant="contained">Next</Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

export default InstructionPage1;
