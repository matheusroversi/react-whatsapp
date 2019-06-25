import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import MessageContainer from "./message/message"
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemText,
  IconButton
} from "@material-ui/core";



const App = ({ classes }) => (
  <div>
    <div className='background' />
    <Grid container className='root'>
      <Grid item xs={12}>
        <Card className='card'>
          <Grid container>
            <LeftContainer classes={classes} />
            <RightContainer classes={classes} />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  </div>
);

const list = [
  { id: 1, name: "Diego", text: "Lorem ipsum", image: <ImageIcon /> },
  { id: 2, name: "Robson", text: "Lorem ipsum", image: <WorkIcon /> },
  { id: 3, name: "Cleiton", text: "Lorem ipsum", image: <BeachAccessIcon /> }
];

const LeftContainer = ({ classes }) => (
  <Grid item xs={3}>
    <CardHeader
      className='rightBorder'
      avatar={
        <Avatar aria-label="Recipe" className='avatar'>
          H
        </Avatar>
      }
    />
    <Paper className='paper' elevation={0}>
      <Typography className='information' variant="subheader">
        Acesse nossa comunidade no Discord e fique por dentro das novidades!
      </Typography>
    </Paper>
    <List>
      {list.map(item => (
        <ListItem>
          <Avatar>{item.image}</Avatar>
          <ListItemText primary={item.name} secondary={item.text} />
        </ListItem>
      ))}
    </List>
  </Grid>
);

const RightContainer = ({ classes }) => (
  <Grid className='heightAdjust right-container' item xs={9}>
    <CardHeader className='header'
      avatar={
        <Avatar aria-label="Recipe" >
          <ImageIcon />
        </Avatar>
      }
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title="Diego"
    />
    {/*<CardContent className='rightContainer content'>
    </CardContent>*/}
    <MessageContainer></MessageContainer>
  </Grid>
);

export default App;
