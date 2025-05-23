const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

const WeekdayHeader = () => (
  <div className="mb-10 grid w-full min-w-0 grid-cols-7">
    {weekNames.map(week => {
      return (
        <div key={week} className="text-center font-extrabold text-gray-600">
          {week}
        </div>
      );
    })}
  </div>
);

export default WeekdayHeader;
