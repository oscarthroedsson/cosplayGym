import express from "express"; // this should be first import
import {
  storeBookSession,
  createSessions,
  destroySession,
  showSessions,
  updateSession,
} from "../controllers/session_controller";

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

router.get("/show", showSessions);
// router.get("/show/:instructor", showInstructorSessions);

router.post("/create", createSessions);
router.post("/book/:sessionId", storeBookSession);

router.patch("/update", updateSession);

router.delete("/destroy/:sessionId", destroySession);
router.delete("/destroy/:instructorId");

export default router;
