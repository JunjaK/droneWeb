import React, { ReactElement } from 'react';

import { RouteComponentProps, useHistory } from 'react-router-dom';
import { StaticContext } from 'react-router';
import {
  Typography, Container, Divider, Button, Card, CardActions, CardActionArea, CardMedia, CardContent,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface testData {
  id: number,
  title: string,
  content: string,
  [PropName: string]: any;
}

interface contentProps{
  title: string,
  content?: string,
  action1?: string,
  action2?: string,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  buttonStyle: {
    margin: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}));

function Content({ title, content, ...props }: contentProps):ReactElement {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='/src/assets/images/59163881_p0.jpg'
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          {props.action1}
        </Button>
        <Button size='small' color='primary'>
          {props.action2}
        </Button>
      </CardActions>
    </Card>
  );
}

Content.defaultProps = {
  content: '',
  action1: 'Share',
  action2: 'Learn More',
};

function DynamicRoute({ match, location }:RouteComponentProps<any, StaticContext, testData>): ReactElement {
  console.log(match, location);
  const classes = useStyles();
  const history = useHistory();
  const onClickGoBack = () => history.go(-1);
  return (
    <Container>
      <Typography variant='h2'>{ location.state.title }</Typography>
      <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
      <Typography variant='body1'>{ location.state.content }</Typography>
      <Content title='testTitle' content={location.state.content} />
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
