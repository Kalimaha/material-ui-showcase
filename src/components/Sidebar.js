import React from 'react';
import List from '@material-ui/core/List';
import AddIcon from '@material-ui/icons/Add';
import Drawer from '@material-ui/core/Drawer';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import CreateIcon from '@material-ui/icons/Create';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import MyDocuments from './MyDocuments';

const Sidebar = () => {
  return (
    <div >
      <Drawer
        variant="permanent"
        anchor="left"
      >
        <div />
        <Divider />
        <List>
          <ListItem button key="Dashboard">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button key="My data">
            <ListItemIcon><FavoriteIcon /></ListItemIcon>
            <ListItemText primary="My data" />
          </ListItem>
          <ListItem button key="New data">
            <ListItemIcon><AddIcon /></ListItemIcon>
            <ListItemText primary="New data" />
          </ListItem>
          <ListItem button key="My documents" selected>
            <ListItemIcon><InsertDriveFileIcon /></ListItemIcon>
            <ListItemText primary="My documents" />
          </ListItem>
          <ListItem button key="My Notes">
            <ListItemIcon><CreateIcon /></ListItemIcon>
            <ListItemText primary="My Notes" />
          </ListItem>
          <ListItem button key="My goals">
            <ListItemIcon><TrackChangesIcon /></ListItemIcon>
            <ListItemText primary="My goals" />
          </ListItem>
        </List>
      </Drawer>
      <main style={{ width: "900px" }}>
        <MyDocuments />
      </main>
    </div>
  );
}

export default Sidebar;
