import { startOfMonth, endOfMonth, startOfWeek, addDays, isMonday, isTuesday, isWednesday, isFriday } from "date-fns";

type Bookings = Personal[];
type SessionsFunction = (days: SessionDay[]) => SessionsObject[];

interface Personal {
  image: string;
  name: string;
  role: string;
  sessions: SessionsObject[];
}

interface SessionsObject {
  start: Date;
  end: Date;
  booked: boolean;
}

type SessionDay = {
  day: string;
  sessions: { start: number; end: number }[];
};

const sesssionPersonalOne = [
  {
    day: "Monday",
    sessions: [
      {
        start: 9,
        end: 10,
      },
      {
        start: 10,
        end: 11,
      },
      {
        start: 11,
        end: 12,
      },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      {
        start: 9,
        end: 10,
      },
      {
        start: 10,
        end: 11,
      },
      {
        start: 11,
        end: 12,
      },
    ],
  },

  {
    day: "Wednesday",
    sessions: [
      {
        start: 9,
        end: 10,
      },
      {
        start: 10,
        end: 11,
      },
      {
        start: 11,
        end: 12,
      },
    ],
  },
  {
    day: "Friday",
    sessions: [
      {
        start: 9,
        end: 10,
      },
      {
        start: 10,
        end: 11,
      },
      {
        start: 11,
        end: 12,
      },
    ],
  },
];

const sesssionPersonalTwo = [
  {
    day: "Tuesday",
    sessions: [
      {
        start: 9,
        end: 10,
      },
      {
        start: 10,
        end: 11,
      },
      {
        start: 11,
        end: 12,
      },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      {
        start: 13,
        end: 14,
      },
      {
        start: 14,
        end: 15,
      },
      {
        start: 15,
        end: 16,
      },
    ],
  },

  {
    day: "Friday",
    sessions: [
      {
        start: 13,
        end: 14,
      },
      {
        start: 14,
        end: 15,
      },
      {
        start: 15,
        end: 16,
      },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      {
        start: 9,
        end: 10,
      },
      {
        start: 10,
        end: 11,
      },
      {
        start: 11,
        end: 12,
      },
    ],
  },
];
const sesssionPersonalThree = [
  {
    day: "Monday",
    sessions: [
      {
        start: 9,
        end: 10,
      },
      {
        start: 10,
        end: 11,
      },
      {
        start: 11,
        end: 12,
      },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      {
        start: 9,
        end: 10,
      },
      {
        start: 10,
        end: 11,
      },
      {
        start: 11,
        end: 12,
      },
      {
        start: 13,
        end: 14,
      },
      {
        start: 14,
        end: 15,
      },
      {
        start: 15,
        end: 16,
      },
    ],
  },
  {
    day: "Friday",
    sessions: [
      {
        start: 13,
        end: 14,
      },
      {
        start: 14,
        end: 15,
      },
    ],
  },
];

const generateSessions: SessionsFunction = (days: SessionDay[]) => {
  const sessions: SessionsObject[] = [];

  days.forEach((day) => {
    const dayDate = getDateForDay(day.day);
    day.sessions.forEach((session) => {
      const startHour = session.start;
      const endHour = session.end;
      const start = new Date(dayDate);
      start.setHours(startHour, 0, 0, 0);

      const end = new Date(dayDate);
      end.setHours(endHour, 0, 0, 0);

      sessions.push({
        start,
        end,
        booked: false,
      });
    });
  });

  return sessions;
};

// Hjälpfunktion för att få rätt datum för en specifik veckodag
const getDateForDay = (day: string): Date => {
  const currentDate = new Date();
  const dayIndex = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].indexOf(day);
  const currentDayIndex = currentDate.getDay();
  const difference = dayIndex - currentDayIndex;
  const targetDate = new Date(currentDate);
  targetDate.setDate(currentDate.getDate() + difference);
  return targetDate;
};

const personal: Personal[] = [
  {
    image:
      "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712534400&semt=sph",
    name: "Erik",
    role: "Role 1",
    sessions: generateSessions(sesssionPersonalOne),
  },
  {
    image:
      "https://media.istockphoto.com/id/1040495528/photo/portrait-of-a-female-personal-trainer-in-the-gym.jpg?s=612x612&w=0&k=20&c=kveWP7cIZerHJtQh2dL_r4MdtNyvWi4KMkXjBM_A5BE= ",
    name: "Josefin",
    role: "Role 2",
    sessions: generateSessions(sesssionPersonalTwo),
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReksMfrX8JHbJyacydLf6gu09S4yjKtbWJSUrtu0U6sA&s",
    name: "Hubbaflii",
    role: "Role 3",
    sessions: generateSessions(sesssionPersonalThree),
  },
];

export const generateMockData = (): Personal[] => {
  const array = [sesssionPersonalOne, sesssionPersonalTwo, sesssionPersonalThree];

  return personal.map((person: Personal, index) => ({
    ...person,
    sessions: generateSessions(array[index]), // Anropa generateSessions för att generera nya sessioner för varje person
  }));
};
