import { resolveTxt } from "dns";
import { SessionsObject } from "../../types";
import { differenceInHours, isSameDay } from "date-fns";

export function vaidateSessionsDayTime(sessions: SessionsObject[]) {
  const book: SessionsObject[] = [];
  const bookNot: SessionsObject[] = [];

  for (let i = 0; i < sessions.length; i++) {
    const hoursDifference = differenceInHours(new Date(sessions[i].end), new Date(sessions[i].start));

    if (isSameDay(sessions[i].start, sessions[i].start) && hoursDifference === 1) {
      book.push(sessions[i]);
    } else {
      bookNot.push(sessions[i]);
    }
  }

  return { book, bookNot };
}
