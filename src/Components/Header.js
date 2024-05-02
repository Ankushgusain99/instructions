import React from 'react';
import { Grid} from '@mui/material';

function Header() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ bgcolor: 'primary.main', py: 5 }}>
      </Grid>
    </Grid>
  );
}

export default Header;
