import React from 'react';
import DataStore from '../../stores/dataStore';
import ScheduleRow from './row';

const Schedule = () => {
  return (
    <table
      style={{
        border: '1px solid gray',
        borderCollapse: 'collapse',
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              border: '1px solid gray',
            }}
          >
            {'Комнаты'}
          </th>
          {DataStore.days?.map((day) => (
            <th key={day} style={{ border: '1px solid gray' }}>
              {day.toString()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {DataStore.rooms.map((room) => (
          <ScheduleRow room={room} key={room.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Schedule;
