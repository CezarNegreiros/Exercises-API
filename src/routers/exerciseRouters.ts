import express, { Router } from "express";
import exerciseController from "src/controllers/exerciseController";

const router = express.Router();

router.get('/:name', exerciseController.getExercisesByName)
router.get('/', exerciseController.getExercises)
router.post('/', exerciseController.postExercise)
router.delete('/:name', exerciseController.deleteExercise)

export default router;