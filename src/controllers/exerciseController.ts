import { Request, Response, NextFunction } from "express";
import Exercise from "../models/exercise";
import exerciseRepository from "../repositories/exerciseRepository";

async function getExercisesByMuscle(req: Request, res: Response){
    const muscle = req.params.muscle;
    const exercise = await exerciseRepository.getExercisesByMuscle(muscle);
    if(exercise){
        res.json(exercise)
    }else{
        res.sendStatus(404)
    }
}

async function getExercises(req: Request, res: Response){
    const exercise = await exerciseRepository.getExercises();
    if(exercise){
        res.json(exercise)
    }else{
        res.sendStatus(404)
    }
}

async function postExercise(req: Request, res: Response){
    const exercise: Exercise = req.body;
    const result = await exerciseRepository.addExercise(exercise);

    if(result){
        res.status(201).json(result);
    }else{
        res.sendStatus(400);
    }
}

async function patchExercise(req: Request, res: Response){
    const id = req.params.id;
    const exercise: Exercise = req.body;
    const result = await exerciseRepository.updateExercise(parseInt(id), exercise);

    if(result){
        res.json(result);
    }else{
        res.sendStatus(404);
    }
}

async function deleteExercise(req: Request, res: Response){
    const id = req.params.id;
    const success = await exerciseRepository.deleteExercise(parseInt(id))

    if(success){
        res.sendStatus(204)
    }else{
        res.sendStatus(404)
    }
}

export default{
    getExercisesByMuscle,
    getExercises,
    postExercise,
    patchExercise,
    deleteExercise
}