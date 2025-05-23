import { CalendarCell, WeekdayHeader, CalendarHeader } from '@/lib/components/calendar'
import { generateCalendar } from '@/lib/utils/dateUtils';

const CalenderComponents= ({
    currentYear,
    currentMonth,
    goToPrevMonth,
    goToNextMonth,
} : {
    currentYear: number;
    currentMonth: number;
    goToPrevMonth: () => void;
    goToNextMonth: () => void;
}) => {
    const daysInCalendar = generateCalendar(new Date(currentYear, currentMonth));

    return (
    <section className=" h-full w-full">
        <article>
            <CalendarHeader
                currentMonth={currentMonth}
                currentYear={currentYear}
                goToPrevMonth={goToPrevMonth}
                goToNextMonth={goToNextMonth}
                />

        <div className="h-full w-full text-center">
            <WeekdayHeader />

            <ul className="grid grid-cols-7 gap-8">
            {daysInCalendar.map((day) => {
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
            </div>
        </article>
    </section>

    )
}

export default CalenderComponents;