import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import React from 'react';

const Rightbar=()=>{
    return(
        <Box bgcolor="blue" flex={2} p={2}>
            <Box position="fixed">
            <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
            <AvatarGroup max={4}>
  <Avatar 
  alt="Remy Sharp" 
  src="ram.jpeg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant="h6" fontWeight={100}>Latest Pictures</Typography>

<ImageList variant="masonry" cols={3} gap={8}>
    <ImageListItem >
      <img
        src="https://en.wikipedia.org/wiki/Potato_chip#/media/File:Potato-Chips.jpg"
        alt="Ramzy" />
        </ImageListItem>
        <ImageListItem >
      <img
        src="components/ram.jpeg"
        alt="Ramzy" />
        </ImageListItem>
        <ImageListItem >
      <img
        src="components/ram.jpeg"
        alt="Ramzy" />
        </ImageListItem>
</ImageList>
            </Box>
        </Box>
    )
}
export default Rightbar