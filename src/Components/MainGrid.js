import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// importing components
import GlobalData from './GlobalData'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{paddingLeft:'1%',paddingTop:'1%',paddingRight:'1%'}}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <GlobalData></GlobalData>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>country</Paper>
        </Grid>
      </Grid>
    </div>
  );
}