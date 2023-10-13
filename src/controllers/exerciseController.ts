import { Request, Response, NextFunction } from "express";
import Exercise from "../models/exercise";
import exerciseRepository from "../repositories/exerciseRepository";

async function getExercisesByName(req: Request, res: Response){
    const name = req.params.name;
    const exercise = await exerciseRepository.getExercisesByName(name);
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
    const exercise = req.body as Exercise;
    const result = await exerciseRepository.addExercise(exercise);

    if(result){
        res.status(201).json(result);
    }else{
        res.sendStatus(400);
    }
}

async function deleteExercise(req: Request, res: Response){
    const name = req.params.name;
    const success = await exerciseRepository.deleteExercise(name)

    if(success){
        res.sendStatus(204)
    }else{
        res.sendStatus(404)
    }
}

export default{
    getExercisesByName,
    getExercises,
    postExercise,
    deleteExercise
}