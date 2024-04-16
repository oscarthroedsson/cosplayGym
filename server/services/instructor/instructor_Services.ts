import { CreateInstructor, Instructor } from "../../../types";
import prisma from "../../prisma";

export const addInstructor = async (instructor: CreateInstructor) => {
  return await prisma.instructor.create({ data: instructor });
};

export const getAllInstructors = async () => {
  try {
    return await prisma.instructor.findMany({
      include: {
        sessions: true,
      },
    });
  } catch (err) {
    console.log("getAllInstructors | error: ", err);
  }
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

export const changesInstructor = async (id: number, instructor: CreateInstructor) => {
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
