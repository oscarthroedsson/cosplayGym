export interface Instructor {
  image: string;
  name: string;
  role: string;
  sessions?: SessionsObject[];
}

export interface Client {
  id?: number;
  clientName: string;
  bookedSession?: SessionsObject[];
}

export interface SessionsObject {
  instructor: number;
  start: Date;
  end: Date;
  isBooked: boolean;
  client?: number;
}
