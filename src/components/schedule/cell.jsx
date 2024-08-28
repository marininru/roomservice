import { useState } from 'react';
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
    <td
      style={{ border: '1px solid gray', minWidth: 100 }}
      onDoubleClick={() => handleClick()}
    >
      {person?.name}
    </td>
  );
};

export default ScheduleCell;
