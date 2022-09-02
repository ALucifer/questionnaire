export interface Quiz {
    id: number,
    libelle: string
}
export interface Question {
    id: number,
    quiz: Quiz,
    libelle: string,
    questionType: string
}