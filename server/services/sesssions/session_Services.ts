import { Client, SessionsObject } from "../../types";
import prisma from "../../prisma";

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

export const getSession = async (sessionId: number) => {
  return await prisma.sessionsObject.findFirst({
    where: { id: sessionId, isBooked: false },
  });
};

export const deleteInstructorSessions = async (instructorId: number) => {
  return await prisma.sessionsObject.deleteMany({
    where: {
      instructor: {
        equals: instructorId,
      },
    },
  });
};

export const deleteSession = async (sessionId: number) => {
  return await prisma.sessionsObject.delete({
    where: {
      id: sessionId,
    },
  });
};

export const bookSession = async (sessionId: number, client: Client) => {
  return await prisma.sessionsObject.update({
    where: {
      id: sessionId,
    },
    data: {
      isBooked: true,
      client: client.id,
    },
  });
};

// ----------------------------------------- CLIENT -------------------------------------------------
export const createClient = async (client: Client) => {
  return await prisma.client.create({
    data: {
      clientName: client.clientName,
    },
  });
};

export const getClient = async (clientName: string) => {
  return await prisma.client.findFirst({
    where: { clientName },
    include: {
      bookedSession: true,
    },
  });
};

export const getClientSessions = async (clientId: number) => {
  return await prisma.sessionsObject.findMany({
    where: { id: clientId },
  });
};
