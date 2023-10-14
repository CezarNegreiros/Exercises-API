import Exercise from "../models/exercise";

const exercises: Exercise[] = [
    {
        id: 1,
        name: 'rosca direta',
        type: 'Strength',
        muscle: 'Biceps',
        difficulty: 'Beginner'
    },
    {
        id: 2,
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

async function updateExercise(id: number, exercise: Exercise): Promise<Exercise | undefined>{
        return new Promise((resolve, reject) => {
            const index = exercises.findIndex(e => e.id === id);

            if(index >= 0){

                if(exercise.id && exercises[index].id !== exercise.id){
                    exercises[index].id = exercise.id
                }
                if(exercise.muscle && exercises[index].muscle !== exercise.muscle){
                    exercises[index].muscle = exercise.muscle
                }

                if(exercise.name && exercises[index].name !== exercise.name){
                    exercises[index].name = exercise.name
                }

                if(exercise.type && exercises[index].type !== exercise.type){
                    exercises[index].type = exercise.type
                }

                if(exercise.difficulty && exercises[index].difficulty !== exercise.difficulty){
                    exercises[index].difficulty = exercise.difficulty
                }

                return resolve(exercises[index])
            }

            return resolve(undefined)
        })
    }

async function deleteExercise(id: number): Promise<boolean>{
    return new Promise((resolve, reject) => {
        const index = exercises.findIndex(e => e.id === id);
        if(index >= 0){
            exercises.splice(index, 1)
            return resolve(true)
        }

        return resolve(false)
    })
}

export default{
    getExercisesByMuscle,
    getExercises,
    addExercise,
    updateExercise,
    deleteExercise
}

