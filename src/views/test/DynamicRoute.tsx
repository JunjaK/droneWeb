import React from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { StaticContext } from 'react-router';
import {
  Typography, Container, Divider, Button,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface testData {
  id: number,
  title: string,
  content: string,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  buttonStyle: {
    margin: theme.spacing(2),
  },
}));

function DynamicRoute({ match, location }:RouteComponentProps<any, StaticContext, testData>): React.ReactElement {
  console.log(match, location);
  const classes = useStyles();
  const history = useHistory();
  const onClickGoBack = () => history.go(-1);
  return (
    <Container>
      <Typography variant='h2'>{ location.state.title }</Typography>
      <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
      <Typography variant='body1'>{ location.state.content }</Typography>
      <Button
        variant='contained'
        color='primary'
        className={classes.buttonStyle}
        onClick={onClickGoBack}
      >
        Go Back
      </Button>
    </Container>
  );
}

export default DynamicRoute;
