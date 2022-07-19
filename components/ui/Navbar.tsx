import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import { AppBar, Box, Button, Link, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from '@mui/material';




export const Navbar = () => {

  const { asPath, push, pathname } = useRouter();

  const path = pathname;

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const [leng, setLeng] = useState<'/en' | '/' | string>(path);

  useEffect(() => {
    leng === '/en' ? push('/en') : push('/')
  }, [leng])


  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: '/en' | '/') => {
    setLeng(newAlignment);
  };

  return (
      <AppBar className='fadeIn2Seg'>
        <Toolbar variant='dense'>

          <Box sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' } }}
            className="fadeIn">
            <NextLink href='/' passHref >
              <Link underline='none'>
                <Button variant='text' color={asPath === '/' || '/en' ? 'success' : 'info'}>{leng === '/en' ? 'Home' : 'Inicio'}</Button>
              </Link>
            </NextLink>
            <NextLink href='#littleAboutMe'>
              <Link underline='none'>
                <Button variant='text' color={asPath === '/es/acerca' ? 'success' : 'info'}>{leng === '/en' ? 'About me' : 'Acerca de mi'}</Button>
              </Link>
            </NextLink>
            <NextLink href='#projects'>
              <Link  underline='none'>
                <Button color={asPath === '/es/proyectos' ? 'success' : 'info'}>{leng === '/en' ? 'My Projects' : 'Mis proyectos'}</Button>
              </Link>
            </NextLink>
          </Box>

          <Box flex={1} />

          <ToggleButtonGroup
            value={leng}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            size='small'
          >
            <ToggleButton value="/" aria-label="left aligned" >
              <Typography variant='body2'>Esp</Typography>
            </ToggleButton>
            <ToggleButton value="/en" aria-label="centered">
              <Typography variant='body2'>Eng</Typography>
            </ToggleButton>
          </ToggleButtonGroup>

        </Toolbar>
      </AppBar>
  )
}
