// functions
import {
  eachDayOfInterval,
  endOfMonth,
  startOfToday,
  format,
  isSameMonth,
  isEqual,
  add,
  parse,
  getDay,
  startOfISOWeek,
} from "date-fns";

// ICONS
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { endOfISOWeek } from "date-fns/endOfISOWeek";
import { generateMockData } from "../assets/Mock/sessions";

export function Calander() {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));

  const mockData = generateMockData();

  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  const parsedCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const daysOfMonth = eachDayOfInterval({
    start: startOfISOWeek(parse(currentMonth, "MMM-yyyy", new Date())),
    end: endOfISOWeek(endOfMonth(firstDayCurrentMonth)),
  });
  console.log("daysOfmonth: ", daysOfMonth);

  function nextMonth() {
    const nextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(nextMonth, "MMM-yyyy"));
  }

  function previusMonth() {
    const nextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(nextMonth, "MMM-yyyy"));
  }

  const monthStartDayClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
    "col-start-7",
    "col-start-7",
  ];

  return (
    <>
      <div>
        <div className="border border-slate-100 p-6 rounded-md min-w-96 min-h-96 flex flex-col justify-start bg-white">
          {/* Navbar year */}
          <nav className="grid grid-cols-3 items-center justify-centers gap-2  py-2">
            <div className="justify-self-start p-1 rounded-md border-slate-100 border-[0.5px] hover:bg-slate-200 hover:border-none">
              <ArrowLeftIcon className="w-6" onClick={previusMonth} />
            </div>

            <div className="justify-self-center font-bold text-xl">
              <p>{currentMonth}</p>
            </div>

            <div
              className="justify-self-end p-1 rounded-md border-slate-100 border-[0.5px] hover:bg-slate-200 hover:border-none"
              onClick={nextMonth}
            >
              <ArrowRightIcon className="w-6 " />
            </div>
          </nav>

          <div className="">
            <div className={`grid grid-cols-7 gap-2 justify-items-center py-2`}>
              <div className="col-span-7 grid grid-cols-7 gap-2 py-2 justify-items-center font-bold ">
                <p>M</p>
                <p>T</p>
                <p>Wed</p>
                <p>Thur</p>
                <p>Fri</p>
                <p>Sat</p>
                <p>Sun</p>
              </div>
              {daysOfMonth.map((day) => {
                return (
                  <>
                    <div
                      key={day.getFullYear()}
                      className={`
                      ${monthStartDayClasses[getDay(day) - 1]}
                      ${!isSameMonth(day, parsedCurrentMonth) && "text-slate-200"}
                      ${isSameMonth(day, parsedCurrentMonth) && !isEqual(day, selectedDay) && "text-slate-600"} 
                      ${isEqual(day, selectedDay) && "text-sky-500"}
                          rounded-md border-slate-100 border-[0.5px] w-full flex justify-center items-center p-1
                          hover:bg-sky-100 hover:border-none
                          `}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          console.log("day: ", day);
                          setSelectedDay(day);
                        }}
                        className=""
                      >
                        <time dateTime={format(day, "d")}> {format(day, "d")}</time>
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div>{/* sshow perssonal */}</div>
      </div>
    </>
  );
}
