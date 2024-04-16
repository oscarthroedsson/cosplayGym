import { Request, Response } from "express";
import {
  addSessions,
  bookSession,
  createClient,
  deleteSession,
  getAllavaibleSessions,
  getClient,
  getSession,
} from "../services/sesssions/session_Services";
import { vaidateSessionsDayTime } from "../validation/validateNewSessions";
import { Client } from "../types";

/*
export const index = async (req, res) => {};
export const show = async (req, res) => {};
export const store = async (req, res) => {};
export const update = async (req, res) => {};
export const destroy = async (req, res) => {};
*/

export const showSessions = async (req: Request, res: Response) => {
  try {
    const sessions = await getAllavaibleSessions();
    res.send({
      message: "Reached showSessions | not implemented",
      data: sessions,
    });
  } catch (err) {
    res.send({
      message: "ERROR | Reached showSessions | not implemented",
      data: err,
    });
  }
};

export const showInstructorSessions = (req: Request, res: Response) => {
  const instructorId = Number(req.params.id);
  try {
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

export const storeBookSession = async (req: Request, res: Response) => {
  const client: Client = req.body;

  console.log("SERVER | client: ", client);
  const sessionId: number = Number(req.params.sessionId);
  console.log("SERVER | sessionId: ", sessionId);

  let bookClient;

  bookClient = await getClient(client.clientName);
  console.log("SERVER | getClient: ", bookClient);

  if (!bookClient || bookClient === null) {
    bookClient = await createClient(client);
    console.log("SERVER | createClient: ", bookClient);
  }

  try {
    const bookedSession = await bookSession(sessionId, bookClient);
    console.log("SERVER | bookedSession: ", bookedSession);

    res.send({
      status: "success",
      message: "Client booked on session",
      data: bookSession,
    });
  } catch (err) {
    res.send({
      status: "ERROR",
      message: "Could not book client on session",
      data: err,
    });
  }
};

export const destroySession = async (req: Request, res: Response) => {
  const sessionsId: number = Number(req.params.sessionId);

  try {
    await deleteSession(sessionsId);

    res.send({
      message: "success",
      data: [],
    });
  } catch (err) {
    res.send({
      message: "ERROR | Reached destroySessions | not implemented",
      data: err,
    });
  }
};
