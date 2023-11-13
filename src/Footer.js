
import * as React from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import StartIcon from '@mui/icons-material/Start';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import { Link } from 'react-router-dom' 


const Footer = ({length}) =>  {
  const year = new Date();
  const FB = 'https://m.facebook.com/p/Asupaha-100069508187552/';
  const Insta = 'https://www.instagram.com/asupaha/';
  const TW = 'https://twitter.com/asupaha?lang=en';
  const GH = 'https://github.com/mhm-aashiq';
  const photo = require('./image/m2.jpg')
  const [color, setColor] = React.useState('primary');
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        ...(color !== 'neutral' && {
          bgcolor: `${color}.800`,
        }),
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: 'sm' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton
          variant="soft"
          size="sm"
          onClick={() => {
            const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

            const nextColor = colors.indexOf(color);
            setColor(colors[nextColor + 1] ?? colors[0]);
          }}
        >
        <ColorLensRoundedIcon fontSize="small" />
        </IconButton>
        <Divider orientation="vertical" />
        <p className='mt-2'>Join me via Social Media </p>
        <StartIcon />
        <IconButton variant="plain" sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}>
        <Link to={FB} className='text-white ' target='_blank' ><FacebookRoundedIcon  /></Link> 
        </IconButton>
        <IconButton variant="plain">
        <Link to={Insta} className='text-white ' target='_blank' ><Instagram /></Link>
        </IconButton>
        <IconButton variant="plain">
        <Link to={TW} className='text-white ' target='_blank' ><Twitter /></Link>
        </IconButton>
        <IconButton variant="plain" >
        <Link to={GH} className='text-white ' target='_blank' ><GitHubIcon /></Link>
        </IconButton>
        
      
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
          }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ flexBasis: { xs: 300, md: 'initial' } }}
          >
            <img alt="" src={photo} />
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">TODO</Typography>
            <Typography level="body-xs"> Total {length>1 ? 'Items': 'Item'}  - {length} </Typography>
          </CardContent>
        </Card>
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px', '--ListItem-gap': '0px' }}
        >
          <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Social Media</ListSubheader>
            <List>
              <ListItem>
               <Link to={FB} className='text-white' target='_blank'> <ListItemButton>FaceBook</ListItemButton></Link>
              </ListItem>
              <ListItem>
              <Link to={Insta} className='text-white' target='_blank'> <ListItemButton>Instagram</ListItemButton></Link>
              </ListItem>
              <ListItem>
              <Link to={TW} className='text-white' target='_blank'>  <ListItemButton>Twitter</ListItemButton></Link>
              </ListItem>
            </List>
          </ListItem>
          {/* <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Sitemap</ListSubheader>
            <List sx={{ '--ListItemDecorator-size': '32px' }}>
              <ListItem>
              <Link className='text-white' to='/'> <ListItemButton>Home</ListItemButton></Link>
              </ListItem>
              <ListItem>
              <Link className='text-white' to='photos'> <ListItemButton>Photos</ListItemButton></Link>
              </ListItem>
              <ListItem>
              <Link className='text-white' to='aboutus'>  <ListItemButton>About us</ListItemButton></Link>
              </ListItem>
            </List>
          </ListItem> */}
        </List>
      </Box>
      <p className='text-center text-white mt-4'>&copy; All Rights Reserved Aashiq   - {year.getFullYear()} </p>
    </Sheet>
  );
}
export default Footer