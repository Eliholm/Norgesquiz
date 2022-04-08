function correctAnswers(count) {
    model.data.correctAnswers.push(count);
    updateView();
}

function answerOneClick() {
    model.data.questions[0].hasBeenAnswered = true;
    updateView();
}

function answerTwoClick() {
    model.data.questions[1].hasBeenAnswered = true;
    updateView();
}

function answerThreeClick() {
    model.data.questions[2].hasBeenAnswered = true;
    updateView();
}

function answerFourClick() {
    model.data.questions[3].hasBeenAnswered = true;
    updateView();
}

function answerFiveClick() {
    model.data.questions[4].hasBeenAnswered = true;
    updateView();
}

function answerSixClick() {
    model.data.questions[5].hasBeenAnswered = true;
    updateView();
}

function answerSevenClick() {
    model.data.questions[6].hasBeenAnswered = true;
    updateView();
}

function answerEightClick() {
    model.data.questions[7].hasBeenAnswered = true;
    updateView();
}