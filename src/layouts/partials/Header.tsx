import React, { ReactElement } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import {
  createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';
import {
  Toolbar, Typography, IconButton, Grid, Divider,
} from '@material-ui/core';
import { Flight as FlightIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontWeight: 500,
  },
  routerLink: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
  },
  routerTypo: {
    fontWeight: 'bold',
  },
  grid: {
    position: 'absolute',
  },
  dividerStyle: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    background: '#dddddd',
    width: '2px',
  },
}));

export default function Header():ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <FlightIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            DroneWeb
          </Typography>

          <Grid container alignItems='center' justify='center' direction='row' className={classes.grid}>
            <Link to='/' className={classes.routerLink}>
              <Typography variant='subtitle1' className={classes.routerTypo}>
                RT-Map
              </Typography>
            </Link>
            <Divider
              orientation='vertical'
              flexItem
              className={classes.dividerStyle}
            />
            <Link to='/database' className={classes.routerLink}>
              <Typography variant='subtitle1' className={classes.routerTypo}>
                Database
              </Typography>
            </Link>
            <Divider
              orientation='vertical'
              flexItem
              className={classes.dividerStyle}
            />
            <Link to='/analytics' className={classes.routerLink}>
              <Typography variant='subtitle1' className={classes.routerTypo}>
                Analytics
              </Typography>
            </Link>
            <Divider
              orientation='vertical'
              flexItem
              className={classes.dividerStyle}
            />
            <Link to='/test' className={classes.routerLink}>
              <Typography variant='subtitle1' className={classes.routerTypo}>
                Test
              </Typography>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
