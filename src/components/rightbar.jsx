import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, ImageListItemBar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
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
<Typography variant="h6" fontWeight={100} mt={2}>Recent Posts</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://mui.com/material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
            </Box>
        </Box>
    )
}
export default Rightbar