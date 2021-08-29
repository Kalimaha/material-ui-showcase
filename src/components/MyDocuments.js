import React from "react";
import MyBreadcrumbs from './Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { Button, FormControlLabel, Grid, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { Label } from "@material-ui/icons";
import MyDocumentsTable from "./MyDocumentsTable";

const MyDocuments = () => {
  return (
    <React.Fragment>
      <br />
      <MyBreadcrumbs />
      <br />
      <Typography variant="h2" component="h2" gutterBottom>
        My documents
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3} style={{ paddingBottom: "8px", fontWeight: "bold" }}>
          Search document
        </Grid>
        <Grid item xs={3} style={{ paddingBottom: "8px", fontWeight: "bold" }}>
          Date upload
        </Grid>
        <Grid item xs={3} style={{ paddingBottom: "8px", fontWeight: "bold" }}>
          &nbsp;
        </Grid>
        <Grid item xs={3} style={{ paddingBottom: "8px", fontWeight: "bold" }}>
          &nbsp;
        </Grid>
        <Grid item xs={3} style={{ paddingTop: 0 }}>
          <TextField
            variant="outlined"
            InputProps={{ startAdornment: (<InputAdornment><SearchIcon /></InputAdornment>) }}
          />
        </Grid>
        <Grid item xs={3} style={{ paddingTop: 0 }}>
          <TextField variant="outlined" type="date" />
        </Grid>
        <Grid item xs={3} style={{ paddingTop: 0 }}>
          <TextField variant="outlined" type="date" />
        </Grid>
        <Grid item xs={3} style={{ paddingTop: 0 }}>
          <Button variant="contained" color="primary" style={{ height: "100%" }}>
            <SearchIcon /> Search
          </Button>
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item xs={12}>
          <MyDocumentsTable />
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

export default MyDocuments;