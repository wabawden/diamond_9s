export const initialTiles = [
    {id: 1,
        text: "health",
        position: 1},
        {id: 2,
        text: "immigration & asylum",
        position: 2},
        {id: 3,
        text: "crime",
        position: 3},
        {id: 4,
        text: "the economy",
        position: 4},
        {id: 5,
        text: "tax",
        position: 5},
        {id: 6,
        text: "pensions",
        position: 6},
        {id: 7,
        text: "education",
        position: 7},
        {id: 8,
        text: "housing",
        position: 8},
        {id: 9,
        text: "the environment",
        position: 9}
]

export const initialQuestion = {
    user: "Mr. Smith",
    question: "What is the most important issue facing the country?",
    highLabel: "Most important",
    lowLabel: "Least Important"
}

export const tileActivity = {
    tiles: initialTiles,
    question: initialQuestion,
    tileNotes: {},
    positionNotes: {}
}