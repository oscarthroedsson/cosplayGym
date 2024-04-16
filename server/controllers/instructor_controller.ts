import { Request, Response } from "express";
import {
  addInstructor,
  changesInstructor,
  deleteInstructor,
  getAllInstructors,
  getInstructor,
} from "../services/instructor/instructor_Services";

import { Instructor } from "../types";
import { deleteInstructorSessions } from "../services/sesssions/session_Services";

/*
export const index = async (req, res) => {};
export const show = async (req, res) => {};
export const store = async (req, res) => {};
export const update = async (req, res) => {};
export const destroy = async (req, res) => {};
*/

export const allInstructors = async (req: Request, res: Response) => {
  try {
    const instructors = await getAllInstructors();
    res.send({
      message: "success",
      data: instructors,
    });
  } catch (err) {
    res.send({
      message: "ERROR | Reached allInstructors | not implemented",
      data: [],
    });
  }
};

export const showInstructor = async (req: Request, res: Response) => {
  const instructorId = Number(req.params.instructorId);

  try {
    const instructor = await getInstructor(instructorId);

    res.send({
      message: "Reached showInstructor | not implemented",
      data: instructor,
    });
  } catch (err) {
    res.send({
      message: "ERROR | Reached showInstructor | not implemented",
      data: [],
    });
  }
};

export const createInstructor = async (req: Request, res: Response) => {
  const instructor: Instructor = req.body;

  try {
    const addedInstructor = await addInstructor(instructor);

    res.send({
      message: "Reached createInstructor",
      data: addedInstructor,
    });
  } catch (err) {
    res.send({
      message: "ERROR | Reached createInstructor ",
      error: err,
    });
  }
};

export const updateInstructor = async (req: Request, res: Response) => {
  const id = Number(req.params.instructorId);
  const newData = req.body;

  try {
    const changes = await changesInstructor(id, newData);
    res.send({
      message: "Success",
      data: changes,
    });
  } catch (err) {
    res.send({
      message: "ERROR | Reached updateInstructor | not implemented",
      data: [],
    });
  }
};

export const destroyInstrucor = async (req: Request, res: Response) => {
  const instructorId = Number(req.params.instructorId);

  try {
    const intructor = await getInstructor(instructorId);

    if (intructor?.sessions) {
      await deleteInstructorSessions(instructorId);
    }

    await deleteInstructor(instructorId);

    res.send({
      message: "success",
      data: [],
    });
  } catch (err) {
    res.send({
      message: "ERROR | Reached destroyInstrucor | not implemented",
      data: err,
    });
  }
};
