import React from "react";
import MyBreadcrumbs from './Breadcrumbs';
import MyDocumentsTable from "./MyDocumentsTable";
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import { Button, Grid, InputAdornment, TextField } from "@material-ui/core";

const MyDocuments = () => {
  return (
    <React.Fragment>
      <br />
      <MyBreadcrumbs />
      <br />
      <Typography variant="h2" gutterBottom>
        My documents
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <TextField label="Search document" variant="outlined" InputProps={{ startAdornment: (<InputAdornment><SearchIcon /></InputAdornment>) }} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label="Date Uploaded (from)" type="date" variant="outlined" InputProps={{ startAdornment: (<InputAdornment><CalendarTodayIcon /></InputAdornment>) }} style={{ height: "100%", width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label="Date Uploaded (to)" type="date" variant="outlined" InputProps={{ startAdornment: (<InputAdornment><CalendarTodayIcon /></InputAdornment>) }} style={{ height: "100%", width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained" color="primary" style={{ height: "100%", width: "100%" }}>
            <SearchIcon /> Search
          </Button>
        </Grid>
      </Grid>

      <br />

      <Grid container>
        <Grid item xs={12} sm={12}>
          <MyDocumentsTable />
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

export default MyDocuments;