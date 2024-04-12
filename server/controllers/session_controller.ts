import { Request, Response } from "express";
import { addSessions, getAllavaibleSessions, getInstructorSessions } from "../services/sesssions/session_Services";
import { vaidateSessionsDayTime } from "../validation/validateNewSessions";

/*
export const index = async (req, res) => {};
export const show = async (req, res) => {};
export const store = async (req, res) => {};
export const update = async (req, res) => {};
export const destroy = async (req, res) => {};
*/

export const showSessions = (req: Request, res: Response) => {
  try {
    const sessions = getAllavaibleSessions();
    res.send({
      message: "Reached showSessions | not implemented",
      data: [],
    });
  } catch (err) {
    res.send({
      message: "ERROR | Reached showSessions | not implemented",
      data: [],
    });
  }
};

export const showInstructorSessions = (req: Request, res: Response) => {
  const instructorId = Number(req.params.id);
  try {
    const sessions = getInstructorSessions(instructorId);
    res.send({
      message: "Reached showInstructorSessions | not implemented",
      data: [],
    });
  } catch (err) {
    res.send({
      message: "ERROR | Reached showInstructorSessions | not implemented",
      data: [],
    });
  }
};

export const createSessions = async (req: Request, res: Response) => {
  const sessions = req.body;

  const { book, bookNot } = vaidateSessionsDayTime(sessions); // validate that start/end is same day, and session is an hour

  //if we dont have any bookable sessions
  if (!book) {
    res.send({
      message: "Sessions is longer/shorter than an hour or not on the same day",
      data: bookNot,
    });
    return;
  }

  try {
    const addedSessions = await addSessions(book);
    console.log("addedSessions: ", addedSessions);

    res.send({
      message: "Reached createSessions ",
      data: addedSessions,
      notBoked:
        bookNot.length < 1
          ? {
              message: "Sessions is longer/shorter than an hour or not on the same day",
              data: bookNot,
            }
          : null,
    });
  } catch (err) {
    res.send({
      message: "ERROR | Reached createSessions ",
      data: err,
    });
  }
};

export const updateSession = (req: Request, res: Response) => {
  try {
    res.send({
      message: "Reached updateSession | not implemented",
      data: [],
    });
  } catch (err) {
    res.send({
      message: "ERROR | Reached updateSession | not implemented",
      data: [],
    });
  }
};

export const destroySession = (req: Request, res: Response) => {
  try {
    res.send({
      message: "Reached destroySession | not implemented",
      data: [],
    });
  } catch (err) {
    res.send({
      message: "ERROR | Reached destroySession | not implemented",
      data: [],
    });
  }
};
export const destroySessions = (req: Request, res: Response) => {
  try {
    res.send({
      message: "Reached destroySessions | not implemented",
      data: [],
    });
  } catch (err) {
    res.send({
      message: "ERROR | Reached destroySessions | not implemented",
      data: [],
    });
  }
};
