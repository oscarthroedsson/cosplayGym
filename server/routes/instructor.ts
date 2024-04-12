import express from "express"; // this should be first import
import {
  createSessions,
  destroySession,
  destroySessions,
  showInstructorSessions,
  showSessions,
  updateSession,
} from "../controllers/session_controller";
import {
  createInstructor,
  destroyInstrucor,
  showInstructor,
  updateInstructor,
} from "../controllers/instructor_controller";
const router = express.Router();

/*
router.get("/url_path", "validations", "function");
router.post("/url_path", "validations", "function");
router.patch("/url_path", "validations", "function");
router.delete("/url_path", "validations", "function");
*/

/*
index,
show,
store
update,
destroy,
create,
*/

/**
 * Import every file in routes that controll the specific routes
 */

router.get("/show/:instructorId", showInstructor);

router.post("/create", createInstructor);

router.patch("/update/:instructorId", updateInstructor);

router.delete("/destroy/:instructorId", destroyInstrucor);

export default router;
