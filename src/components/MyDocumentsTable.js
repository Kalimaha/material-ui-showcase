import React from "react";
import Typography from '@material-ui/core/Typography';
import {
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";

const MyDocumentsTable = () => {
  return (
    <div className="documents-table" style={{ padding: "20px" }}>
      <Typography variant="h4" component="h4" gutterBottom>
        Recently uploaded
      </Typography>
      <br />
      <b>Document type</b>
      <Grid container>
        <FormGroup row >
          <FormControlLabel label="PDF" control={<Switch color="primary" />} />
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
              <TableCell>Blood test results from 31 May 2021:<br />Haematology and Serum chemistry</TableCell>
              <TableCell>PDF</TableCell>
              <TableCell>01 Jun 2021</TableCell>
              <TableCell>
                <Button color="primary">Print</Button>
                <Button color="primary">Download</Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><Link href="/" style={{ cursor: "pointer" }}>ReferralLetterApr21</Link></TableCell>
              <TableCell>Referral letter for Dr Smith<br />(Neurologist)</TableCell>
              <TableCell>PDF</TableCell>
              <TableCell>28 May 2021</TableCell>
              <TableCell>
                <Button color="primary">Print</Button>
                <Button color="primary">Download</Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><Link href="/" style={{ cursor: "pointer" }}>MRIApr21</Link></TableCell>
              <TableCell>MRI: 2 Apr 2021</TableCell>
              <TableCell>JPG</TableCell>
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
  )
};

export default MyDocumentsTable;
