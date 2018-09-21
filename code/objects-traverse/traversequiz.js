var questions = {
    "quiz": {
        "sport": {
            "q1": {
                    "question": "Which one is correct team name in NBA?",
                    "options": [
                        "New York Bulls",
                        "Los Angeles Kings",
                        "Golden State Warriros",
                        "Huston Rocket"
                    ],
                    "answer": "Huston Rocket"
                }
            },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        }
    }
}

function answerIndex(a, b, c) {
    let x;
    if(a.quiz.sport.q1.question === b) {
        x = `${(a.quiz.sport.q1.options.indexOf(c))}`;
        return Number(x);
    } else if(a.quiz.maths.q1.question === b) {
        x = `${a.quiz.maths.q1.options.indexOf(c)}`;
        return Number(x);
    } else if(a.quiz.maths.q2.question === b) {
        x = `${a.quiz.maths.q2.options.indexOf(c)}`;
        return Number(x);
    } else {
        return `invalid question`;
    }
}

console.log(answerIndex(questions,"Which one is correct team name in NBA?","Huston Rocket" ));
// console.log(answerIndex("questions","Which one is correct team name in NBA?","Huston Rocket" ));

// 1. In the question 'Which one is correct team name in NBA?'
// return the index at which the correct answer is found 

// 1. answerIndex("questions","Which one is correct team name in NBA?","Huston Rocket" );
// returns 3