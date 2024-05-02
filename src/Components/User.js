import React from 'react'
import user from './user.png'
import { Typography} from '@mui/material';
function User() {
  return (
    <div>
      <img src={user} style={{marginLeft:'20px', paddingTop:'15px'}}/>
      <br></br>
      <Typography variant='h6' sx={{ display: 'flex', justifyContent: 'center'}}>John Smith</Typography>
    </div>
  )
}

export default User
