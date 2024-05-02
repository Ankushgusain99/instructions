import React from 'react';
import { Grid } from '@mui/material';
import Header from './Components/Header';
import InstructionPage1 from './Components/InstructionPage1';
import InstructionPage2 from './Components/InstructionPage2';
import User from './Components/User';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Error from './Components/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Grid container spacing={0}>
          <Grid item xs={10}>
            <Routes>
              <Route path="/" element={<InstructionPage1 />} />
              <Route path="/instruction2" element={<InstructionPage2 />} />
              <Route path="/error" element={<Error />} />
              {/* Add a catch-all route */}
              <Route path="*" element={<Navigate to="/error" replace />} />
            </Routes>
          </Grid>
          {/* Conditionally render the User component */}
          <Routes>
            <Route path="/error" element={<></>} />
            <Route path="*" element={<User />} />
          </Routes>
        </Grid>
      </BrowserRouter>
    </>
  );
}

export default App;
