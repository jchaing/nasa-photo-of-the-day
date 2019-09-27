import React, {useState} from 'react';
import Media from './Media'
import moment from 'moment'

const DatePicker = () => {
  const todaysDate = moment(new Date()).format('YYYY-MM-DD');
  const [date, setDate] = useState(todaysDate);

  return (
    <div>
      <div>
        <input
          id="calendar"
          type="date"
          value={date}
          onChange={e => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div>
        <Media date={date} />
      </div>
    </div>
  );
};

export default DatePicker;
