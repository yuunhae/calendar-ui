import LeftArrowIcon from '@/lib/assets/left-arrow.svg';
import RightArrowIcon from '@/lib/assets/right-arrow.svg';

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
          className='flex h-full items-center border rounded-sm border-gray-300 p-10'
          onClick={goToPrevMonth}
          aria-label="Previous month"
        >
        <img src={LeftArrowIcon} aria-hidden="true" className='w-10 max-w-full h-auto' />
          {/* <LeftArrowIcon aria-hidden="true" /> */}
        </button>
        <button
          type="button"
          className='flex h-full items-center border rounded-sm border-gray-300 p-10'
          onClick={goToNextMonth} 
          aria-label="Next month">
          <img src={RightArrowIcon} aria-hidden="true" className='w-10 max-w-full h-auto' />

          {/* <RightArrowIcon aria-hidden="true" /> */}
        </button>
      </nav>
    </header>
  );
};

export default CalendarHeader;


