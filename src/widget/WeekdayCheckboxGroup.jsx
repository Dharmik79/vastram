import React from 'react';

function WeekdayCheckboxGroup({ name, selectedWeekdays, setSelectedWeekdays }) {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const handleCheckboxChange = (index) => {
    if (selectedWeekdays.includes(index)) {
      setSelectedWeekdays(
        [name],
        selectedWeekdays.filter((day) => day !== index)
      );
    } else {
      setSelectedWeekdays([name], [...selectedWeekdays, index]);
    }
  };

  return (
    <div>
      <ul className="flex items-center justify-center content-center flex-wrap">
        {weekdays.map((weekday, index) => (
          <>
            <input
              type="checkbox"
              value={index}
              checked={selectedWeekdays.includes(index)}
              onChange={() => handleCheckboxChange(index)}
            />
            <li key={index} className="m-1">
              <label className="">
                <>{weekday}</>
              </label>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default WeekdayCheckboxGroup;
