export default class Exercise{
    id: number
    name: string
    type: string
    muscle: string
    difficulty: string

    private static id = 1

    constructor(name: string, type: string, muscle: string, difficulty: string){
        this.id = Exercise.id++
        this.name = name
        this.type = type
        this.muscle = muscle
        this.difficulty = difficulty
    }
}