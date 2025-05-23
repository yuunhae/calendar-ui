import { CalenderComponents } from '.';

import useMonthlyCalendar from '@/lib/hooks/useMonthlyCalendar';

function Calendar() {
  const { currentYear, currentMonth, goToPrevOrNextMonth } =
    useMonthlyCalendar();

  const goToPrevMonth = () => goToPrevOrNextMonth(-1);
  const goToNextMonth = () => goToPrevOrNextMonth(1);
  return (
    <div className="w-full max-w-[750px] px-4 sm:px-6 lg:px-8">
      <CalenderComponents
        currentYear={currentYear}
        currentMonth={currentMonth}
        goToPrevMonth={goToPrevMonth}
        goToNextMonth={goToNextMonth}
      />
    </div>
  );
}

export default Calendar;
