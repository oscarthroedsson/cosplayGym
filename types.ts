export interface CreateInstructor {
  image: string;
  name: string;
  role: string;
}

export interface Instructor {
  id?: number;
  image: string;
  name: string;
  role: string;
  sessions: SessionsObject[];
}

export interface Client {
  id?: number;
  clientName: string;
  bookedSession?: SessionsObject[];
}

export interface SessionsObject {
  id?: number;
  instructor: number;
  start: Date;
  end: Date;
  isBooked: boolean;
  client?: number;
  clientName?: string;
}

export interface BookingInfo extends SessionsObject {
  id: number;
  name?: string;
}
