import express, { Router } from "express";
import exerciseController from "../controllers/exerciseController";

const router = express.Router();

router.get('/:muscle', exerciseController.getExercisesByMuscle)
router.get('/', exerciseController.getExercises)
router.post('/', exerciseController.postExercise)
router.delete('/:name', exerciseController.deleteExercise)

export default router;