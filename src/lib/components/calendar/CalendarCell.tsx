
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
      className={`flex min-h-62 h-full w-full items-start border border-gray-300 rounded-8  hover:bg-gray-100 transition-colors duration-200 ease-in cursor-pointer `}
    >
        <time
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

