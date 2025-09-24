import leftArrowIcon from '../../assets/left-arrow.svg';
import rightArrowIcon from '../../assets/right-arrow.svg';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

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
      className="mb-26 flex h-32 w-full items-center"
      aria-label="Calendar header"
    >
      <nav
        className="grid w-full grid-cols-[1fr_2fr_1fr] items-center"
        aria-label="Calendar navigation buttons"
      >
        <div
          className="justify-items-end"
          onClick={goToPrevMonth}
          aria-label="Previous month"
        >
          <img
            className="bg-color-transition flex h-full items-center rounded-8 border border-gray-300 p-10 text-15 font-thin hover:bg-gray-200"
            src={leftArrowIcon}
            alt="LeftArrowIcon"
          />
        </div>
        <p
          className="head-24-600 text-center"
          aria-label={`${monthNames[currentMonth]} ${currentYear}`}
        >
          {`${monthNames[currentMonth]} ${currentYear}`}
        </p>
        <div onClick={goToNextMonth} aria-label="Next month">
          <img
            className="bg-color-transition flex h-full items-center rounded-8 border border-gray-300 p-10 text-15 font-thin hover:bg-gray-200"
            src={rightArrowIcon}
            alt="LeftArrowIcon"
          />
        </div>
      </nav>
    </header>
  );
};

export default CalendarHeader;
