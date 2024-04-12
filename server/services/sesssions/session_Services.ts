import { SessionsObject } from "../../types";
import prisma from "../../prisma";
import { parseISO, formatISO } from "date-fns";
/*
 id: number;
    instructor: number;
    start: Date;
    end: Date;
    isBooked: boolean;
    client: number | null;
    memberId: number | null;
*/

export const addSessions = async (sessions: SessionsObject[]) => {
  return await prisma.sessionsObject.createMany({
    data: sessions.map((session) => ({
      ...session,
      start: new Date(session.start + "Z"), // Z tells prisma it is UTC
      end: new Date(session.end + "Z"), // Z tells prisma it is UTC
      instructor: session.instructor,
    })),
  });
};

export const getAllavaibleSessions = async () => {
  return await prisma.sessionsObject.findMany({
    where: { isBooked: false },
  });
};

export const getClientSessions = async (clientId: number) => {
  return await prisma.sessionsObject.findMany({
    where: { id: clientId },
  });
};

export const deleteSessions = async (instructorId: number) => {
  return await prisma.sessionsObject.deleteMany({
    where: {
      instructor: {
        equals: instructorId,
      },
    },
  });
};
