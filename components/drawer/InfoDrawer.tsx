'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import DrawerCard from '../card/DrawerCard';
import { AnimeProp } from '../card/AnimeCard';

const InfoDrawer = ({ openDrawer, toggleDrawer, anime }: {
  openDrawer: boolean;
  toggleDrawer: React.MouseEventHandler<HTMLButtonElement>;
  anime: AnimeProp;
}) => {

  const list = () => (
    <Box
      sx={{ width: 450, height:'100%', background: '#171620' }}
      role="presentation"
    >
      <DrawerCard anime={anime} />
    </Box>
  );

  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={toggleDrawer}
    >
      {list()}
    </Drawer>
  );
}

export default InfoDrawer;
