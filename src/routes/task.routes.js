const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/task.controller");

router.use(authMiddleware);

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
