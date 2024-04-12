import { Instructor } from "../../types";
import prisma from "../../prisma";

export const addInstructor = async (instructor: Instructor) => {
  return await prisma.instructor.create({ data: instructor });
};

export const getInstructor = async (instructorId: number) => {
  try {
    return await prisma.instructor.findFirst({
      where: {
        id: instructorId,
      },
      include: {
        sessions: true,
      },
    });
  } catch (err) {
    console.log("getInstructor | error: ", err);
  }
};

export const changesInstructor = async (id: number, instructor: Instructor) => {
  return await prisma.instructor.update({
    where: {
      id: id,
    },
    data: instructor,
  });
};

export const deleteInstructor = async (instructorId: number) => {
  return await prisma.instructor.delete({
    where: {
      id: instructorId,
    },
  });
};
