export default class Exercise{
    name: string
    type: string
    muscle: string
    difficulty: string

    constructor(name: string, type: string, muscle: string, difficulty: string){
        this.name = name
        this.type = type
        this.muscle = muscle
        this.difficulty = difficulty
    }
}