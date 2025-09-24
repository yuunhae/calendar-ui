import { useMemo } from 'react';
import {
  CalendarCell,
  WeekdayHeader,
  CalendarHeader,
} from '@/lib/components/calendar';
import useMonthlyCalendar from '@/lib/hooks/useMonthlyCalendar';
import { generateCalendar } from '@/lib/utils/dateUtils';
import { CalendarProps } from '@/lib/utils/type';

const Calendar = ({ size = 'sm' }: CalendarProps) => {
  const { currentYear, currentMonth, goToPrevOrNextMonth } =
    useMonthlyCalendar();

  const goToPrevMonth = () => goToPrevOrNextMonth(-1);
  const goToNextMonth = () => goToPrevOrNextMonth(1);
  const daysInCalendar = useMemo(() => {
    return generateCalendar(new Date(currentYear, currentMonth));
  }, [currentMonth, currentYear]);

  // default size
  const sizeClasses = {
    sm: 'w-500 px-4',
    md: 'w-700 px-6',
    lg: 'w-850 px-8',
  };

  const containerClasses = `${sizeClasses[size]}`;

  return (
    <section className={`${containerClasses}`}>
      <CalendarHeader
        currentMonth={currentMonth}
        currentYear={currentYear}
        goToPrevMonth={goToPrevMonth}
        goToNextMonth={goToNextMonth}
      />

      <div className="flex h-full w-full flex-col text-center">
        <WeekdayHeader />

        <section
          className={` ${
            size === 'sm'
              ? 'h-340'
              : size === 'md'
                ? 'h-500'
                : size === 'lg'
                  ? 'h-600'
                  : 'h-300'
          }`}
        >
          <ul className="grid h-full grid-cols-7 gap-10">
            {daysInCalendar.map(day => {
              const isCurrentMonth = day.isCurrentMonth;
              return (
                <CalendarCell
                  key={day.kstDate.getTime()}
                  day={day}
                  isCurrentMonth={isCurrentMonth}
                />
              );
            })}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Calendar;
