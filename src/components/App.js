import React from 'react';
import MyDocuments from './MyDocuments';
import Container from '@material-ui/core/Container';


import Sidebar from './Sidebar';
import { Grid } from '@material-ui/core';

const App = () => {
  return (
    <Container maxWidth="xl" className="main-container">
      <Grid container spacing={40}>
        {/* <Grid item xs={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div>Header</div>
        </Grid> */}
        <Grid item xs={12} sm={2} className="sidebar">
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={10} className="main-panel">
          <MyDocuments />
        </Grid>
        {/* <Grid item xs={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div>Footer</div>
        </Grid> */}
      </Grid>
    </Container>
  );
}

export default App;
