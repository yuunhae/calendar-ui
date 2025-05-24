const monthNames = [  "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

const CalendarHeader = ({
  currentMonth,
  currentYear,
  goToPrevMonth,
  goToNextMonth,

}: {
  currentMonth: number;
  currentYear: number;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
}) => {
  return (
    <header
      className="mb-26 flex w-full h-32 items-center justify-between"
      aria-label="Calendar header"
    >
      <nav
        className="flex items-center"
        aria-label="Calendar Date Information"
      >
          <h2 className="head-24-600 text-start">
          {`${monthNames[currentMonth]} ${currentYear}`}
        </h2>
      </nav>

      <nav
        className="flex h-full items-center gap-10 mr-20"
        aria-label="Calendar navigation"
      >
        <button
          type="button"
          className='flex h-full items-center border rounded-8 border-gray-300 p-10 text-15 font-thin bg-color-transition hover:bg-gray-200'
          onClick={goToPrevMonth}
          aria-label="Previous month"
        >
          <text className="mb-2">Prev</text>
        </button>
        <button
          type="button"
          className='flex h-full items-center border rounded-8 border-gray-300 p-10 text-15 font-thin bg-color-transition hover:bg-gray-200'
          onClick={goToNextMonth}
          aria-label="Next month">
          <text className="mb-2">Next</text>

        </button>
      </nav>
    </header>
  );
};

export default CalendarHeader;


