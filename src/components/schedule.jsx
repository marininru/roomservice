import React, { useMemo } from 'react';
import DataStore from '../stores/dataStore';

const Schedule = () => {
  const days = useMemo(
    () =>
      Array(31)
        .fill(0)
        .map((_, i) => i + 1),
    []
  );

  return (
    <table
      style={{
        width: '100%',
        border: '1px solid gray',
        borderCollapse: 'collapse',
      }}
    >
      <tr>
        <th style={{ border: '1px solid gray' }}>{'Комнаты'}</th>
        {days &&
          days.map((d) => (
            <th style={{ border: '1px solid gray' }}>{d.toString()}</th>
          ))}
      </tr>
      {DataStore.rooms.map((room) => (
        <tr>
          <td style={{ border: '1px solid gray' }}>{room.name}</td>
          {days &&
            days.map((d) => <td style={{ border: '1px solid gray' }}></td>)}
        </tr>
      ))}
    </table>
  );
};

export default Schedule;
