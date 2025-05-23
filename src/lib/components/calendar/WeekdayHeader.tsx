const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

const WeekdayHeader = () => (
  <div className="grid grid-cols-7 w-full min-w-0 mb-10">
    {weekNames.map((week) => {
      return (
        <div
          key={week}
          className="font-extrabold text-center text-gray-600 "
        >
          {week}
        </div>
      );
    })}
  </div>
);

export default WeekdayHeader;
