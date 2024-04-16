import { PrismaClient } from "@prisma/client";
import { formatISO, parseISO, startOfWeek } from "date-fns";
import { SessionsObject } from "../types";

const prisma = new PrismaClient();
async function main() {
  // Create the instructors
  const tom = await prisma.instructor.create({
    data: {
      image: "https://i.pinimg.com/736x/dc/38/ea/dc38eaf88de57efae42f02a2a2684835.jpg",
      name: "Tom",
      role: "instructor",
    },
  });

  const erik = await prisma.instructor.create({
    data: {
      image:
        "https://img.freepik.com/free-photo/young-adult-doing-indoor-sport-gym_23-2149205541.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705104000&semt=ais",
      name: "Erik",
      role: "instructor",
    },
  });

  const thomas = await prisma.instructor.create({
    data: {
      image: "https://img.freepik.com/premium-photo/portrait-young-handsome-fitness-trainer-gym_93675-119983.jpg",
      name: "Thomas",
      role: "instructor",
    },
  });

  const erika = await prisma.instructor.create({
    data: {
      image:
        "https://media.istockphoto.com/id/856797530/photo/portrait-of-a-beautiful-woman-at-the-gym.jpg?s=612x612&w=0&k=20&c=0wMa1MYxt6HHamjd66d5__XGAKbJFDFQyu9LCloRsYU=",
      name: "Erika",
      role: "instructor",
    },
  });

  const sessionTom = [
    { instructor: tom.id, start: "2024-04-22T07:00:00Z", end: "2024-04-22T08:00:00Z", isBooked: false },
    { instructor: tom.id, start: "2024-04-22T08:00:00Z", end: "2024-04-22T09:00:00Z", isBooked: false },
    { instructor: tom.id, start: "2024-04-22T09:00:00Z", end: "2024-04-22T10:00:00Z", isBooked: false },

    { instructor: tom.id, start: "2024-04-23T07:00:00Z", end: "2024-04-23T08:00:00Z", isBooked: false },
    { instructor: tom.id, start: "2024-04-23T08:00:00Z", end: "2024-04-23T09:00:00Z", isBooked: false },
    { instructor: tom.id, start: "2024-04-23T09:00:00Z", end: "2024-04-23T10:00:00Z", isBooked: false },

    { instructor: tom.id, start: "2024-04-24T07:00:00Z", end: "2024-04-24T08:00:00Z", isBooked: false },
    { instructor: tom.id, start: "2024-04-24T08:00:00Z", end: "2024-04-24T09:00:00Z", isBooked: false },
    { instructor: tom.id, start: "2024-04-24T09:00:00Z", end: "2024-04-24T10:00:00Z", isBooked: false },

    { instructor: tom.id, start: "2024-04-26T07:00:00Z", end: "2024-04-26T08:00:00Z", isBooked: false },
    { instructor: tom.id, start: "2024-04-26T08:00:00Z", end: "2024-04-26T09:00:00Z", isBooked: false },
    { instructor: tom.id, start: "2024-04-26T09:00:00Z", end: "2024-04-26T10:00:00Z", isBooked: false },
  ];

  // monday, thusday, wednesday
  const sessionErik = [
    { instructor: erik.id, start: "2024-04-23T10:00:00Z", end: "2024-04-22T11:00:00Z", isBooked: false },
    { instructor: erik.id, start: "2024-04-23T11:00:00Z", end: "2024-04-22T12:00:00Z", isBooked: false },
    { instructor: erik.id, start: "2024-04-23T13:00:00Z", end: "2024-04-22T14:00:00Z", isBooked: false },

    { instructor: erik.id, start: "2024-04-24T13:00:00Z", end: "2024-04-23T14:00:00Z", isBooked: false },
    { instructor: erik.id, start: "2024-04-24T14:00:00Z", end: "2024-04-23T15:00:00Z", isBooked: false },
    { instructor: erik.id, start: "2024-04-24T15:00:00Z", end: "2024-04-23T16:00:00Z", isBooked: false },

    { instructor: erik.id, start: "2024-04-25T07:00:00Z", end: "2024-04-24T08:00:00Z", isBooked: false },
    { instructor: erik.id, start: "2024-04-25T08:00:00Z", end: "2024-04-24T09:00:00Z", isBooked: false },
    { instructor: erik.id, start: "2024-04-25T09:00:00Z", end: "2024-04-24T10:00:00Z", isBooked: false },
  ];
  // wednesday, thursday, saturday
  const sessionThomas = [
    { instructor: thomas.id, start: "2024-04-24T16:00:00Z", end: "2024-04-22T17:00:00Z", isBooked: false },
    { instructor: thomas.id, start: "2024-04-24T17:00:00Z", end: "2024-04-22T18:00:00Z", isBooked: false },
    { instructor: thomas.id, start: "2024-04-24T18:00:00Z", end: "2024-04-22T19:00:00Z", isBooked: false },
    { instructor: thomas.id, start: "2024-04-25T16:00:00Z", end: "2024-04-22T17:00:00Z", isBooked: false },
    { instructor: thomas.id, start: "2024-04-25T17:00:00Z", end: "2024-04-22T18:00:00Z", isBooked: false },
    { instructor: thomas.id, start: "2024-04-25T18:00:00Z", end: "2024-04-22T19:00:00Z", isBooked: false },
    { instructor: thomas.id, start: "2024-04-26T10:00:00Z", end: "2024-04-22T11:00:00Z", isBooked: false },
    { instructor: thomas.id, start: "2024-04-26T11:00:00Z", end: "2024-04-22T12:00:00Z", isBooked: false },
  ];
  // monday, Wednesday, Friday
  const sessionErika = [
    { instructor: erika.id, start: "2024-04-22T13:00:00Z", end: "2024-04-22T14:00:00Z", isBooked: false },
    { instructor: erika.id, start: "2024-04-22T14:00:00Z", end: "2024-04-22T15:00:00Z", isBooked: false },
    { instructor: erika.id, start: "2024-04-22T14:00:00Z", end: "2024-04-22T16:00:00Z", isBooked: false },

    { instructor: erika.id, start: "2024-04-24T13:00:00Z", end: "2024-04-24T14:00:00Z", isBooked: false },
    { instructor: erika.id, start: "2024-04-24T14:00:00Z", end: "2024-04-24T15:00:00Z", isBooked: false },
    { instructor: erika.id, start: "2024-04-24T14:00:00Z", end: "2024-04-24T16:00:00Z", isBooked: false },

    { instructor: erika.id, start: "2024-04-26T13:00:00Z", end: "2024-04-26T14:00:00Z", isBooked: false },
    { instructor: erika.id, start: "2024-04-26T14:00:00Z", end: "2024-04-26T15:00:00Z", isBooked: false },
    { instructor: erika.id, start: "2024-04-26T14:00:00Z", end: "2024-04-26T16:00:00Z", isBooked: false },
  ];

  const sessionsArray = [sessionTom, sessionErik, sessionThomas, sessionErika];

  // add the session to the DB
  sessionsArray.forEach(async (instructor) => {
    instructor.forEach(async (session: any) => {
      console.log("SESSON: ", session);
      await prisma.sessionsObject.createMany({
        data: {
          instructor: session.instructor,
          start: new Date(session.start),
          end: new Date(session.end),
          isBooked: false,
        },
      });
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

/*
  1
      {
      instructor: tom.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T07:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T08:00:00Z`,
      isBooked: false,
    },
    {
      instructor: tom.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T08:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T09:00:00Z`,
      isBooked: false,
    },
    {
      instructor: tom.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T09:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T10:00:00Z`,
      isBooked: false,
    },
    {
      instructor: tom.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 2 }), { representation: "date" })}T07:00:00Z`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 2 }), { representation: "date" })}T08:00:00Z`,
      isBooked: false,
    },
    {
      instructor: tom.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 2 }), { representation: "date" })}T08:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 2 }), { representation: "date" })}T09:00:00`,
      isBooked: false,
    },
    {
      instructor: tom.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 2 }), { representation: "date" })}T09:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 2 }), { representation: "date" })}T10:00:00`,
      isBooked: false,
    },
    {
      instructor: tom.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T07:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T08:00:00`,
      isBooked: false,
    },
    {
      instructor: tom.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T08:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T09:00:00`,
      isBooked: false,
    },
    {
      instructor: tom.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T09:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T10:00:00`,
      isBooked: false,
    },
    {
      instructor: tom.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 5 }), { representation: "date" })}T07:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 5 }), { representation: "date" })}T08:00:00`,
      isBooked: false,
    },
    {
      instructor: tom.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 5 }), { representation: "date" })}T08:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 5 }), { representation: "date" })}T09:00:00`,
      isBooked: false,
    },
    {
      instructor: tom.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 5 }), { representation: "date" })}T09:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 5 }), { representation: "date" })}T10:00:00`,
      isBooked: false,
    },
  */

/*
     {
      instructor: erik.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T10:00:00`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T11:00:00Z`,
      isBooked: false,
    },
    {
      instructor: erik.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T13:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T14:00:00Z`,
      isBooked: false,
    },
    {
      instructor: erik.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T14:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T15:00:00Z`,
      isBooked: false,
    },
    {
      instructor: erik.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 2 }), { representation: "date" })}T13:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 2 }), { representation: "date" })}T14:00:00Z`,
      isBooked: false,
    },
    {
      instructor: erik.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 2 }), { representation: "date" })}T07:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 2 }), { representation: "date" })}T08:00:00`,
      isBooked: false,
    },
    {
      instructor: erik.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 2 }), { representation: "date" })}T14:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 2 }), { representation: "date" })}T015:00:00`,
      isBooked: false,
    },
    {
      instructor: erik.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T10:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T11:00:00`,
      isBooked: false,
    },
    {
      instructor: erik.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T13:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T14:00:00`,
      isBooked: false,
    },
    {
      instructor: erik.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T14:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T015:00:00`,
      isBooked: false,
    },
    */

/*
     {
      instructor: thomas.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T16:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T17:00:00Z`,
      isBooked: false,
    },
    {
      instructor: thomas.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T17:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T18:00:00Z`,
      isBooked: false,
    },
    {
      instructor: thomas.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T18:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T19:00:00Z`,
      isBooked: false,
    },
    {
      instructor: thomas.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 4 }), { representation: "date" })}T16:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 4 }), { representation: "date" })}T17:00:00Z`,
      isBooked: false,
    },
    {
      instructor: thomas.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 4 }), { representation: "date" })}T17:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 4 }), { representation: "date" })}T18:00:00Z`,
      isBooked: false,
    },
    {
      instructor: thomas.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 4 }), { representation: "date" })}T18:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 4 }), { representation: "date" })}T19:00:00`,
      isBooked: false,
    },
    {
      instructor: thomas.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 6 }), { representation: "date" })}T09:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 6 }), { representation: "date" })}T10:00:00`,
      isBooked: false,
    },
    {
      instructor: thomas.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 6 }), { representation: "date" })}T10:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 6 }), { representation: "date" })}T11:00:00`,
      isBooked: false,
    },
    {
      instructor: thomas.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 6 }), { representation: "date" })}T11:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 6 }), { representation: "date" })}T12:00:00`,
      isBooked: false,
    },
    */

/*
     {
      instructor: erika.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T13:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T14:00:00Z`,
      isBooked: false,
    },
    {
      instructor: erika.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T14:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T15:00:00Z`,
      isBooked: false,
    },
    {
      instructor: erika.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T15:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 1 }), { representation: "date" })}T16:00:00Z`,
      isBooked: false,
    },
    {
      instructor: erika.id,
      start: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T12:00:00Z`,
      end: `${formatISO(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T13:00:00Z`,
      isBooked: false,
    },
    {
      instructor: erika.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T14:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T15:00:00`,
      isBooked: false,
    },
    {
      instructor: erika.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T16:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 3 }), { representation: "date" })}T17:00:00`,
      isBooked: false,
    },
    {
      instructor: erika.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 5 }), { representation: "date" })}T07:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 5 }), { representation: "date" })}T08:00:00`,
      isBooked: false,
    },
    {
      instructor: erika.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 5 }), { representation: "date" })}T08:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 5 }), { representation: "date" })}T09:00:00`,
      isBooked: false,
    },
    {
      instructor: erika.id,
      start: `${(startOfWeek(new Date(), { weekStartsOn: 5 }), { representation: "date" })}T09:00:00`,
      end: `${(startOfWeek(new Date(), { weekStartsOn: 5 }), { representation: "date" })}T10:00:00`,
      isBooked: false,
    },
    */
