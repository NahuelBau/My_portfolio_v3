import { Grid, Card, CardMedia, Box, Typography } from "@mui/material"
import { PrincipalLayout } from "../PrincipalLayout"
import Typed from 'react-typed';
import { es_Words, en_Words } from './words';
import { SmallAboutme } from "./SmallAboutme";

import ReactFullpage from '@fullpage/react-fullpage'
import { Navbar } from "../../ui/Navbar";



interface Props {
  lenguage: 'Es' | 'En'
};

export const PresentationScreen = ({ lenguage }: Props) => {

  let TEXT;
  lenguage === 'Es' ? TEXT = es_Words : TEXT = en_Words;

  return (
    <PrincipalLayout title={''} pageDescription={''}>

      <Grid container className='fadeIn'>

        <Grid item display={{ xs: 'flex', sm: 'block' }} sm={6} height={{ xs: 'calc(100vh - 200px)', sm: 'auto' }} justifyContent={'center'}>
          <Card sx={{ borderRadius: 35, alignItems: 'center', justifyContent: 'center' }}>
            <CardMedia
              component="img"
              height='auto'
              sx={{ justifyContent: 'center', height: { sm: 'auto' }, display: { xs: 'none', sm: 'flex' } }}
              src="https://www.pandasecurity.com/es/mediacenter/src/uploads/2021/07/pandasecurity-hackers-talento.jpg"
            />
          </Card>
        </Grid>


        <Grid item xs={12} sm={6} display='flex' justifyContent={'center'}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
          }}>
            <CardMedia
              component="img"
              height='auto'
              sx={{ borderRadius: 50, justifyContent: 'center', height: 200, width: 200, display: { xs: 'flex', sm: 'none' } }}
              src="https://www.pandasecurity.com/es/mediacenter/src/uploads/2021/07/pandasecurity-hackers-talento.jpg"
            />
            <Box textAlign={'center'} paddingTop={2}>
              <Typography variant='h5'>{TEXT?.hello}</Typography><Typography variant='h3' color={'#A27B5C'}>Nahuel Bautista</Typography>
            </Box>
            <Typed style={{ fontSize: '20px' }} strings={TEXT?.personalDescription} typeSpeed={35} backSpeed={60} backDelay={2000} loop smartBackspace />
          </Box>
        </Grid>


      </Grid>

      <div id='littleAboutMe'>
        <SmallAboutme />
      </div>


      <Grid >
        <div id="projects">
          <Grid container sx={{ display: 'flex', height: 'calc(100vh - 200px)' }} marginTop={18}>
            <Grid xs={12} padding={2}>
              <Typography variant='h4' justifyContent='center' textAlign='center'>Una pequeña parte de mi vida.</Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography variant='body1'>Projects</Typography>
              <br />
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam neque a repudiandae eius sequi doloribus quae est ipsam excepturi.</Typography>
            </Grid>

            <Grid item sm={6} padding={2}>

            </Grid>
          </Grid>
        </div>
      </Grid>

    </PrincipalLayout>


  )
}
