import { Box, Typography, CircularProgress } from '@mui/material'
import Head from 'next/head';
import React from 'react'

interface Props {
  lenguage: 'En' | 'Es'
}



export const FullScreenLoeding = ({ lenguage }: Props) => {

  let loadingText: string;

  lenguage === 'Es' ? loadingText = 'Si lo puedes imaginar, lo puedes programar...' : loadingText = 'If you can imagine it, you can program it...';

  return (
    <>
      <Head>
        <title>MNB</title>
      </Head>

      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        className='fadeIn'
        padding={4}
      >
        <Typography sx={{ mb: 3 }} variant="h2" fontWeight={300} fontSize={20}>{loadingText}</Typography>
        {/* <Typography sx={{ mb: 3 }} variant="subtitle2" alignSelf={'start'} fontWeight={200} fontSize={20}>asdas</Typography> */}
        <CircularProgress thickness={5} color='info' />
      </Box>
    </>
  )
}

// 18 ruta 40 - 12 ruta 52
