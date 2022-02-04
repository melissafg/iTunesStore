import React from 'react';
import { Card, Grid, Icon, Image } from 'semantic-ui-react'
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export default function Items({ items }) {
  return (
    <Grid stretched stackable columns={3}  >
      {items && items.map((item, index) => (
        <Grid.Column key={index}>
          <Card >
            <Image src={item.artworkUrl100} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{item.trackName}</Card.Header>
              <Card.Meta>
                {item.artistName}
              </Card.Meta>
              <Card.Description>
                {item.collectionName}
              </Card.Description>
              <Card.Description>
                <Icon name='time'/>
                {millisToMinutesAndSeconds(item.trackTimeMillis)}
                <Icon name='dollar sign' />
                {item.trackPrice}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))
      }

    </Grid>
  );

}

