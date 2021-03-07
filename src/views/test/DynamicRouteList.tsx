import React from 'react';
import {
  Container, Typography, List, ListItem, Divider,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

interface testData {
  id: number,
  title: string,
  content: string,
}

function DynamicRouteList():any {
  const routeList = [];
  for (let i = 0; i < 15; i += 1) {
    const data:testData = {
      id: i + 1,
      title: `TestRoute${i + 1}`,
      content: `This is Test Dynamic Route Test Page${i + 1}`,
    };
    routeList.push(data);
  }
  return (
    <Container>
      <List>
        {routeList.map((elem) => (
          <div key={elem.id}>
            <ListItem>
              <Link to={{
                pathname: `/test/${elem.id}`,
                state: elem,
              }}
              >
                <Typography variant='subtitle2'>
                  {elem.title}
                </Typography>
              </Link>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Container>
  );
}

export default DynamicRouteList;
