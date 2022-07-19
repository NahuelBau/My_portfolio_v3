import { Box, CardMedia, Grid, IconButton, Tooltip, Link, Typography } from '@mui/material';
import { es_Words } from './words';

import NextLink from 'next/link';


import { SiTypescript, SiReact, SiJavascript, SiFirebase, SiNextdotjs, SiArduino, SiCss3, SiHtml5, SiMongodb, SiBootstrap, SiMaterialui } from 'react-icons/si'
import MyStack from '../../ui/MyStack';

export const SmallAboutme = () => {

  const { littleAboutMe, myStackDesctription } = es_Words;

  return (
    <Grid container sx={{ display: 'flex', height: 'calc(100vh - 200px)', maxHeight: { xs: 'auto', sm: '500px' } }} marginTop={15}>
      <Grid xs={12}>
        <Typography variant='h4' justifyContent='center' textAlign='center'>Una pequeña parte de mi vida.</Typography>
      </Grid>
      <Grid item sm={6} p={1}>
        <Typography variant='subtitle1'> Bueno... soy Nahuel, un placer! 👋. </Typography>
        <Typography variant='subtitle2'>◽ Me gusta aprender cosas nuevas.</Typography>
        <Typography variant='subtitle2'>◽ Se podria decir que soy un programador autodidacta.</Typography>
        <Typography variant='subtitle2'>◽ Me encantan todo tipo de teclados (Mecanicos, Membrana, Customs) y todo tipo de distribuciones.</Typography>
        <Typography variant='subtitle2'>◽ Tambien me gusta el cafe ☕.</Typography>


        <Grid marginTop={2}>
          <NextLink href='/es/mas-de-mi' passHref >
            <Link className='links' variant='overline' sx={{ color: 'white', ":hover": {color: '#A27B5C'} }} >
              Tienes tiempo para contarte un poco mas de mi vida?
            </Link>
          </NextLink>
        </Grid>

        <br />
      </Grid>

      <Grid item sm={6} padding={2}>
        <Typography>{myStackDesctription}</Typography>
        <MyStack />
      </Grid>

    </Grid>
  )
}
