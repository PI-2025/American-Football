const Questions = [
    {
        q: "How many NFL teams are there? _____.",
        a: [{text: "11", isCorrect: false},
            {text: "19", isCorrect: false},
            {text: "32", isCorrect: true},
            {text: "24", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: there are ___ Defensive players on the field.",
        a: [{text: "8", isCorrect: false},
            {text: "11", isCorrect: true},
            {text: "15", isCorrect: false},
            {text: "24", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: There are ___ in a football team.",
        a: [{text: "53", isCorrect: true},
            {text: "67", isCorrect: false},
            {text: "45", isCorrect: false},
            {text: "1", isCorrect: false},
           ]
    },
    {
        q: "There are _____ Divisions in the NFL",
        a: [{text: "3", isCorrect: false},
            {text: "5", isCorrect: false},
            {text: "8", isCorrect: false},
            {text: "2", isCorrect: true},
           ]
    },
    
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    // ToDo: finish this later...
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;

}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
