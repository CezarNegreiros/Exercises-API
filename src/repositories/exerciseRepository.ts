import Exercise from "../models/exercise";
const { getConnection } = require('../storage/db')

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

async function getExercisesByMuscle(muscle: string){
    const conn = await getConnection();
    return await conn.get(`SELECT * FROM exercises WHERE muscle = ?`, muscle)
}

async function getExercises(){
    const conn = await getConnection();
    return await conn.all(`SELECT * FROM exercises`)
}

async function addExercise(exercise: Exercise){
    const conn = await getConnection();
    const result = await conn.run(`INSERT INTO exercises (name, type, muscle, difficulty) VALUES (?, ?, ?, ?)`, exercise.name, exercise.type, exercise.muscle, exercise.difficulty)
    
    return result
}

async function updateExerciseDifficulty(id: number, exercise: Exercise){
    const conn = await getConnection()
    const result = await conn.run(`UPDATE exercises SET difficulty = ? WHERE id = ?`, exercise.difficulty, id)

    return result
    }

async function deleteExercise(id: number){
    const conn = await getConnection()
    const result = conn.get(`DELETE FROM exercises WHERE id = ?`, id)
   
    if(result != null){
        return true
    }

    return false
}

export default{
    getExercisesByMuscle,
    getExercises,
    addExercise,
    updateExerciseDifficulty,
    deleteExercise
}

