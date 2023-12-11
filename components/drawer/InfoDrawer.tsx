'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import DrawerCard from '../card/DrawerCard';

const InfoDrawer = ({ openDrawer, toggleDrawer }: {
  openDrawer: boolean;
  toggleDrawer: React.MouseEventHandler<HTMLButtonElement>;

}) => {

  const list = () => (
    <Box
      sx={{ width: 450 }}
      role="presentation"
    >
      <DrawerCard />
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
