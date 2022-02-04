import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const Item = () => (
  <div>
    <Card>
      <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  </div>


  // <div style={{ padding: "50px" }}>
  //   <Grid container justifyContent="center" spacing={2}>
  //     {songs && songs.map((song, index) => (
  //         <Grid key={index}>
  //           <Paper className={classes.paper}>
  //             <Typography>{song.trackName}</Typography>
  //             <Typography>{song.artistName}</Typography>
  //             <Typography>{song.collectionName}</Typography>
  //             <Typography>
  //               {millisToMinutesAndSeconds(song.trackTimeMillis)}
  //             </Typography>
  //             <Typography>{song.trackPrice}</Typography>
  //             <img
  //               className={classes.img}
  //               alt="complex"
  //               src={song.artworkUrl100}
  //             />
  //           </Paper>
  //         </Grid>
  //       ))}
  //   </Grid>
  // </div>
)

export default Item;
