import { SessionsObject } from "../../../types";

export const getAllavaibleSessions = async () => {
  const res = await fetch("http://localhost:3000/sessions/show");
  const data = await res.json();
  return data.data;
};

export const bookSession = async (bookingInfo: SessionsObject) => {
  console.log("bookinginfo: ", bookingInfo);

  const res = await fetch(`http://localhost:3000/sessions/book/${bookingInfo.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingInfo),
  });
  const data = await res.json();
};
