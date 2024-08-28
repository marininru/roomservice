import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DataStore from '../../stores/dataStore';
import ScheduleRow from './row';

const Schedule = () => {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>{'Комнаты'}</TableCell>
            {DataStore.days?.map((day) => (
              <TableCell
                sx={{ borderLeft: '1px solid lightgray' }}
                align="center"
                key={day}
              >
                {day}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {DataStore.rooms.map((room) => (
            <ScheduleRow room={room} key={room.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Schedule;
