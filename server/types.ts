export interface Instructor {
  image: "string";
  name: "string";
  role: "string";
}

export interface SessionsObject {
  instructor: number;
  start: Date;
  end: Date;
  isBooked: boolean;
  client?: number;
}
