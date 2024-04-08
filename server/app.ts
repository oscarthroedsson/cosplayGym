import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(morgan("dev"));

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Ladda miljövariabler från .env-filen till processens environment
config();

// Exempel på hur du kan använda en laddad miljövariabel
const apiKey = process.env.API_KEY;
if (!apiKey) {
  console.error("API-nyckel saknas i miljövariabler.");
  process.exit(1);
}

// Använd apiKey här i din kod...
