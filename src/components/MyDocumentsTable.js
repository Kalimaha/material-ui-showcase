import React from "react";
import Typography from '@material-ui/core/Typography';
import { Button, FormControlLabel, FormGroup, Grid, Link, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

const MyDocumentsTable = () => {
  const createData = (name, description, type, uploaded, action) => {
    return { name, description, type, uploaded, action };
  }

  const rows = [
    createData("Hello", "world", "spam", "eggs", "bacon")
  ];

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'description', numeric: true, disablePadding: false, label: 'Description' },
    { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
    { id: 'Uploaded', numeric: false, disablePadding: false, label: 'Uploaded' },
    { id: 'Actions', numeric: false, disablePadding: false, label: 'Actions' },
  ];

  // const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <React.Fragment >
      <div style={{ marginTop: "16px", padding: "16px" }}>
        <Typography variant="h4" component="h4" gutterBottom>
          Recently uploaded
        </Typography>
        <br />
        <b>Document type</b>
        <Grid container>
          <FormGroup row >
            <FormControlLabel label="PDF" control={<Switch color="primary" checked />} />
            <FormControlLabel label="PNG" control={<Switch color="primary" />} />
            <FormControlLabel label="JPG" control={<Switch color="primary" />} />
          </FormGroup>
        </Grid>
        <br />
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Uploaded</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><Link href="/" style={{ cursor: "pointer" }}>TestResultsMay21</Link></TableCell>
                <TableCell>Blood test results from 31 May 2021:<br />Haematology and erum chemistry</TableCell>
                <TableCell>PDF</TableCell>
                <TableCell>01 Jun 2021</TableCell>
                <TableCell>
                  <Button color="primary">Print</Button>
                  <Button color="primary">Download</Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell><Link href="/" style={{ cursor: "pointer" }}>ReferralLetterApr21</Link></TableCell>
                <TableCell>Referral letter for Dr Smit<br />(Neurologist)</TableCell>
                <TableCell>PDF</TableCell>
                <TableCell>28 May 2021</TableCell>
                <TableCell>
                  <Button color="primary">Print</Button>
                  <Button color="primary">Download</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </React.Fragment>
  )
};

export default MyDocumentsTable;
