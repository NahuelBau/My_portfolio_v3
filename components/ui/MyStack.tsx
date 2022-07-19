import { Grid, Tooltip, IconButton, Divider, Box } from '@mui/material';
import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiFirebase, SiMongodb, SiArduino, SiMaterialui, SiBootstrap } from 'react-icons/si'

const MyStack = () => {
  return (
    <Grid container alignItems='center' padding={2}>
      <Grid item xs={12} sm={4} textAlign={'center'} >

        <Tooltip title="Html 5">
          <IconButton sx={{ padding: 1.5 }}>
            <SiHtml5 size={40} style={{ margin: 2 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Css 3">
          <IconButton sx={{ padding: 1.5 }}>
            <SiCss3 size={40} style={{ margin: 2 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Javascript">
          <IconButton sx={{ padding: 1.5 }}>
            <SiJavascript size={40} style={{ margin: 2 }} />
          </IconButton>
        </Tooltip>
        
        <Box sx={{display: {sx: 'flex', sm: 'none'}}}>
          <Divider />
        </Box>


        <Tooltip title="Typescript">
          <IconButton sx={{ padding: 1.5 }}>
            <SiTypescript size={40} style={{ margin: 2 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="React">
          <IconButton sx={{ padding: 1.5 }}>
            <SiReact size={40} style={{ margin: 2 }} />
          </IconButton>
        </Tooltip>


        <Tooltip title="Next js">
          <IconButton sx={{ padding: 1.5 }}>
            <SiNextdotjs size={40} style={{ margin: 2 }} />
          </IconButton>
        </Tooltip>
        <Box sx={{display: {sx: 'flex', sm: 'none'}}}>
          <Divider />
        </Box>

      </Grid>

      <Grid item xs={12} sm={4} textAlign={'center'} >

        <Tooltip title="Firebase">
          <IconButton sx={{ padding: 1.5 }}>
            <SiFirebase size={40} style={{ margin: 1, }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="MongoDB">
          <IconButton sx={{ padding: 1.5 }}>
            <SiMongodb size={40} style={{ margin: 1 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Arduino">
          <IconButton sx={{ padding: 1.5 }}>
            <SiArduino size={40} style={{ margin: 1 }} />
          </IconButton>
        </Tooltip>
        <Box sx={{display: {sx: 'flex', sm: 'none'}}}>
          <Divider />
        </Box>
      </Grid>

      <Grid item xs={12} sm={3} textAlign={'center'}>
        <Tooltip title="MaterialUI">
          <IconButton >
            <SiMaterialui size={40} style={{ margin: 1 }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Bootstrap">
          <IconButton >
            <SiBootstrap size={40} style={{ margin: 4 }} />
          </IconButton>
        </Tooltip>
      </Grid>

    </Grid>
  )
}

export default MyStack