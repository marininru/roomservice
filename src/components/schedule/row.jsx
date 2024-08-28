import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import DataStore from '../../stores/dataStore';
import ScheduleCell from './cell';

const ScheduleRow = ({ room }) => (
  <TableRow>
    <TableCell sx={{ minWidth: 120, whiteSpace: 'nowrap' }}>
      {room.name}
    </TableCell>
    {DataStore.days?.map((day) => (
      <ScheduleCell room={room} day={day} key={day} />
    ))}
  </TableRow>
);

export default ScheduleRow;
