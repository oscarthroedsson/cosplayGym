/**
 * WE import the routes folder in app.js. This index file is the file app.use(router) will enter first becuase of
 * us importing a folder instead of a file
 */

//ƒ Syntax example for using another folder/file router.use("/authors", authorRoutes);
import express from "express";
import sesssionRoutes from "./sessions";
import instructorRoutes from "./instructor";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    message: "Thanks for using Cosplay Gym API.",
    data: [],
  });
});

/*
Instructor
*/
router.use("/instructor", instructorRoutes);

/*
Sessions
*/
router.use("/sessions", sesssionRoutes);

// handle request that do not find any routes
router.use((req, res) => {
  // Respond with 404 and a message in JSON-format
  res.status(404).send({
    message: "No route was found",
  });
});

// Do not write anyting under this line
export default router;
