import Exercise from "../models/exercise";

const exercises: Exercise[] = [
    {
        name: 'rosca direta',
        type: 'Strength',
        muscle: 'Biceps',
        difficulty: 'Beginner'
    },
    {
        name: 'remada alta',
        type: 'Strength',
        muscle: 'Costas',
        difficulty: 'Beginner'
    }
];

async function getExercisesByMuscle(muscle: string): Promise<Exercise | undefined>{
    return new Promise((resolve, reject) => {
        return resolve(exercises.find(e => e.muscle === muscle));
    })
}

async function getExercises(): Promise<Exercise[]>{
    return  new Promise((resolve, reject) =>{
        return resolve(exercises);
    })
}

async function addExercise(exercise: Exercise): Promise<Exercise>{
    return new Promise((resolve, reject) => {
        if(!exercise.name || !exercise.muscle || !exercise.type || !exercise.difficulty){
            return reject(new Error('Invalid Exercise'));
        }

        const newExercise = new Exercise(exercise.name, exercise.type, exercise.muscle, exercise.difficulty);
        exercises.push(newExercise);

        return resolve(newExercise);
    })
}

async function deleteExercise(name: string): Promise<boolean>{
    return new Promise((resolve, reject) => {
        const index = exercises.find(e => e.name === name);
        if(index){
            exercises.splice(exercises.indexOf(index), 1)
            return resolve(true)
        }

        return resolve(false)
    })
}

export default{
    getExercisesByMuscle,
    getExercises,
    addExercise,
    deleteExercise
}

