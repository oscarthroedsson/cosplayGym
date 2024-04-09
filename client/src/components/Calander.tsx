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
  startOfDay,
  isSameDay,
  eachHourOfInterval,
  getHours,
  isSameHour,
  getDate,
  getMonth,
} from "date-fns";

// ICONS
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useMemo, useState } from "react";
import { endOfISOWeek } from "date-fns/endOfISOWeek";
import { generateMockData } from "../assets/Mock/sessions";

export function Calander() {
  const today = startOfToday();

  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const [availableSessions, setAvailableSessions] = useState();

  const mockData = generateMockData();

  // TEMPORERY UNTILL API EXIST
  const showSessions = useMemo(() => {
    return mockData.flatMap((object) => {
      return {
        ...object,
        sessions: object.sessions.filter((session) => {
          if (getDay(session.start) === getDay(selectedDay)) {
            return session;
          }
        }),
      };
    });
  }, [selectedDay]);
  console.log("showSessions: ", showSessions);

  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  const parsedCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const daysOfMonth = eachDayOfInterval({
    start: startOfISOWeek(parse(currentMonth, "MMM-yyyy", new Date())),
    end: endOfISOWeek(endOfMonth(firstDayCurrentMonth)),
  });

  const hoursOfDay = eachHourOfInterval({
    start: new Date(selectedDay.setHours(6, 0, 0, 0)),
    end: new Date(selectedDay.setHours(21, 0, 0, 0)),
  });

  console.log("hoursOfDay: ", hoursOfDay);

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

  function findSessions(clickedDay: Date) {
    const monkeyV = mockData.flatMap((person, index) => {
      return person.sessions
        .filter((session) => isSameDay(session.start, clickedDay))
        .map((session) => ({
          start: session.start,
          end: session.end,
          image: person.image,
          name: person.name,
          role: person.role,
        }));
    });
  }

  return (
    <>
      <div className=" flex flex-wrap-reverse items-start justify-center xl:justify-between xl:p-4 gap-2 border-[1px] border-slate-300 rounded-lg">
        {/* Show personal */}
        {/* Sätt hight på deenna div för att kontrollera höjdens */}
        <div className="h-96 w-full xl:w-96 overflow-hidden overflow-scroll p-4">
          {hoursOfDay.map((hour: Date, hourIndex: number) => {
            return (
              <>
                <div className="">
                  <div key={hourIndex} className="flex justsify-center items-center gap-x-2">
                    <p className="text-[10px] text-slate-400">{format(hour, "HH:mm")}</p>
                    <hr className="h-0.4 w-full mt-1 bg-slate-400" />
                  </div>

                  <div className="w-full grid grid-cols-1 grid-rows-auto py-4 gap-2">
                    {showSessions.map((personal) => {
                      return personal.sessions.map((time) => {
                        return (
                          getHours(hour) &&
                          getHours(time.start) === getHours(hour) && (
                            <>
                              <div className="divide-y divide-slate-20">
                                {/* Booking session */}
                                <div className="w-full p-2 rounded-md bg-slate-100 hover:shadow-md">
                                  <div className=" flex w-fit gap-4">
                                    <img src={personal.image} alt="" className="w-12 rounded-full" />
                                    <div>
                                      <p className="font-semibold text-slate-600">{personal.name}</p>
                                      <div className="text-xs text-slate-500">
                                        <p>
                                          Time: {format(time.start, "HH:mm")} - {format(time.end, "HH:mm")}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )
                        );
                      });
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="flex flex-col justify-start  w-full xl:w-96 min-h-96 bg-white border border-slate-100 p-2 rounded-md  ">
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
              <div className="w-full col-span-7 grid grid-cols-7 gap-2 py-2 justify-items-center font-bold ">
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
                      ${isEqual(getDate(day), getDate(selectedDay)) && "text-pink-500"}
                      ${isSameMonth(day, parsedCurrentMonth) && !isEqual(day, selectedDay) && "text-slate-600"} 
                          rounded-md border-slate-100 border-[0.5px] w-full flex justify-center items-center p-1
                          hover:bg-sky-100 hover:border-none
                          cursor-pointer`}
                      onClick={() => {
                        findSessions(day);
                        setSelectedDay(day);
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          console.log("day: ", day);
                        }}
                        className=""
                      >
                        <time dateTime={format(day, "d")}>{format(day, "d")}</time>
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* {mockData.map((personal) => {
            return (
              <>
                <div>
                  <img src={personal.image} alt={`profile picture of ${personal.role}`} className="h-12 rounded-full" />
                </div>
              </>
            );
          })} */
}
