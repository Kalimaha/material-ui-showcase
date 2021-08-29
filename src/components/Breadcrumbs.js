import React from "react";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const MyBreadcrumbs = () => {
  return (
    <React.Fragment>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">My documents</Typography>
      </Breadcrumbs>
    </React.Fragment>
  )
};

export default MyBreadcrumbs;