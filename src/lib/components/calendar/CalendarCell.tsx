const CalendarCell = ({
  day,
  isCurrentMonth,
}: {
  day: {
    kstDate: Date;
    formattedDate: string;
  };
  isCurrentMonth: boolean;
}) => {
  return (
    <li
      className={`bg-color-transition flex h-full min-h-62 w-full items-start rounded-8 border border-gray-300 hover:bg-gray-200`}
    >
      <time
        aria-label={day.kstDate.toString()}
        aria-current="date"
        dateTime={day.formattedDate}
        className={`body-16-400 w-full ${
          isCurrentMonth ? 'text-gray-700' : 'text-gray-400'
        }`}
      >
        {day.kstDate.getDate()}
      </time>
    </li>
  );
};

export default CalendarCell;
