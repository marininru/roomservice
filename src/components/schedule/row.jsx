import DataStore from '../../stores/dataStore';
import ScheduleCell from './cell';

const ScheduleRow = ({ room }) => (
  <tr>
    <td
      style={{ border: '1px solid gray', minWidth: 120, whiteSpace: 'nowrap' }}
    >
      {room.name}
    </td>
    {DataStore.days?.map((day) => (
      <ScheduleCell room={room} day={day} key={day} />
    ))}
  </tr>
);

export default ScheduleRow;
