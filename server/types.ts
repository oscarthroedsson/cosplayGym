export interface Instructor {
  image: string;
  name: string;
  role: string;
}

export interface Client {
  id?: number;
  name: string;
  sessions?: SessionsObject[];
}

export interface SessionsObject {
  instructor: number;
  start: Date;
  end: Date;
  isBooked: boolean;
  client?: number;
}
