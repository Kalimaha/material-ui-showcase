import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import { Button, ButtonGroup } from '@material-ui/core';

const buttonStyle = {
  height: "64px",
  borderColor: "#0C2947",
  color: "#FFF",
}

const selectedButtonStyle = {
  height: "64px",
  borderColor: "#0C2947",
  color: "#FFF",
  backgroundColor: "#184473",
}

const Sidebar = () => {
  return (
    <div style={{ color: "#FFF" }}>
      <div className="logo">InforMS</div>
      <hr />
      <ButtonGroup orientation="vertical" variant="outlined" color="primary" style={{ width: "100%" }}>
        <Button style={buttonStyle} size="large">
          <HomeIcon /> Dashboard
        </Button>
        <Button style={buttonStyle} size="large">
          <FavoriteIcon /> My Data
        </Button>
        <Button style={buttonStyle} size="large">
          <AddIcon /> New Data
        </Button>
        <Button style={selectedButtonStyle} size="large">
          <InsertDriveFileIcon /> My Documents
        </Button>
        <Button style={buttonStyle} size="large">
          <CreateIcon /> My Notes
        </Button>
        <Button style={buttonStyle} size="large">
          <TrackChangesIcon /> My Goals
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default Sidebar;