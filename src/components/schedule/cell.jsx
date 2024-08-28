import { useState } from 'react';
import TableCell from '@mui/material/TableCell';

import DataStore from '../../stores/dataStore';

const ScheduleCell = ({ room, day }) => {
  const [person, setPerson] = useState(null);

  const handleClick = () => {
    if (person) {
      setPerson(null);
    } else {
      const idx = Math.floor(Math.random() * DataStore.persons.length);
      const newPerson = DataStore.persons[idx];
      setPerson(newPerson);
    }
  };

  return (
    <TableCell
      align="center"
      sx={{ borderLeft: '1px solid lightgray', minWidth: 100 }}
      onDoubleClick={() => handleClick()}
    >
      {person?.name}
    </TableCell>
  );
};

export default ScheduleCell;
