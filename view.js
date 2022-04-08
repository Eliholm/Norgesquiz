updateView();

function updateView(){
    let questionOneAnswered = model.data.questions[0].hasBeenAnswered === true ? 'disabled' : '';
    let questionTwoAnswered = model.data.questions[1].hasBeenAnswered === true ? 'disabled' : '';
    let questionThreeAnswered = model.data.questions[2].hasBeenAnswered === true ? 'disabled' : '';
    let questionFourAnswered = model.data.questions[3].hasBeenAnswered === true ? 'disabled' : '';
    let questionFiveAnswered = model.data.questions[4].hasBeenAnswered === true ? 'disabled' : '';
    let questionSixAnswered = model.data.questions[5].hasBeenAnswered === true ? 'disabled' : '';
    let questionSevenAnswered = model.data.questions[6].hasBeenAnswered === true ? 'disabled' : '';
    let questionEightAnswered = model.data.questions[7].hasBeenAnswered === true ? 'disabled' : '';

    document.getElementById('app').innerHTML = `
    <div class="top-flexbox">
    ${model.data.images.header1}
    <h1>Norgesquiz</h1>
    ${model.data.images.header2}
    </div>
    <div class="result">Antall riktige svar: ${model.data.correctAnswers.length}/8</div>

    <div class="container">
    <div class="questions-grid">
    <div class="title">${model.data.questions[0].title}</div>
    <button class="first wrong" ${questionOneAnswered} onclick="answerOneClick()">${model.data.questions[0].firstOption}</button>
    <button class="second wrong" ${questionOneAnswered} onclick="answerOneClick()">${model.data.questions[0].secondOption}</button>
    <button class="third correct" ${questionOneAnswered} onclick="correctAnswers(1); answerOneClick()">${model.data.questions[0].thirdOption}</button>
    <button class="fourth wrong" ${questionOneAnswered} onclick="answerOneClick()">${model.data.questions[0].fourthOption}</button>
    </div>

    <div class="questions-grid">
    <div class="title">${model.data.questions[1].title}</div>
    <button class="first correct" ${questionTwoAnswered} onclick="correctAnswers(1); answerTwoClick()">${model.data.questions[1].firstOption}</button>
    <button class="second wrong" ${questionTwoAnswered} onclick="answerTwoClick()">${model.data.questions[1].secondOption}</button>
    <button class="third wrong" ${questionTwoAnswered} onclick="answerTwoClick()">${model.data.questions[1].thirdOption}</button>
    <button class="fourth wrong" ${questionTwoAnswered} onclick="answerTwoClick()">${model.data.questions[1].fourthOption}</button>
    </div>

    <div class="questions-grid">
    <div class="title">${model.data.questions[2].title}</div>
    <button class="first wrong" ${questionThreeAnswered} onclick="answerThreeClick()">${model.data.questions[2].firstOption}</button>
    <button class="second wrong" ${questionThreeAnswered} onclick="answerThreeClick()">${model.data.questions[2].secondOption}</button>
    <button class="third wrong" ${questionThreeAnswered} onclick="answerThreeClick()">${model.data.questions[2].thirdOption}</button>
    <button class="fourth correct" ${questionThreeAnswered} onclick="correctAnswers(1); "answerThreeClick()">${model.data.questions[2].fourthOption}</button>
    </div>

    <div class="questions-grid">
    <div class="title">${model.data.questions[3].title}</div>
    <button class="first" ${questionFourAnswered} onclick="answerFourClick()">${model.data.questions[3].firstOption}</button>
    <button class="second correct" ${questionFourAnswered} onclick="correctAnswers(1); answerFourClick()">${model.data.questions[3].secondOption}</button>
    <button class="third" ${questionFourAnswered} onclick="answerFourClick()">${model.data.questions[3].thirdOption}</button>
    <button class="fourth" ${questionFourAnswered} onclick="answerFourClick()">${model.data.questions[3].fourthOption}</button>
    </div>

    <div class="questions-grid">
    <div class="title">${model.data.questions[4].title}</div>
    <button class="first correct" ${questionFiveAnswered} onclick="correctAnswers(1); answerFiveClick()">${model.data.questions[4].firstOption}</button>
    <button class="second wrong" ${questionFiveAnswered} onclick="answerFiveClick()">${model.data.questions[4].secondOption}</button>
    <button class="third wrong" ${questionFiveAnswered} onclick="answerFiveClick()">${model.data.questions[4].thirdOption}</button>
    <button class="fourth wrong" ${questionFiveAnswered} onclick="answerFiveClick()">${model.data.questions[4].fourthOption}</button>
    </div>

    <div class="questions-grid">
    <div class="title">${model.data.questions[5].title}</div>
    <button class="first wrong" ${questionSixAnswered} onclick="answerSixClick()">${model.data.questions[5].firstOption}</button>
    <button class="second wrong" ${questionSixAnswered} onclick="answerSixClick()">${model.data.questions[5].secondOption}</button>
    <button class="third correct" ${questionSixAnswered} onclick="correctAnswers(1); answerSixClick()">${model.data.questions[5].thirdOption}</button>
    <button class="fourth wrong" ${questionSixAnswered} onclick="answerSixClick()">${model.data.questions[5].fourthOption}</button>
    </div>

    <div class="questions-grid">
    <div class="title">${model.data.questions[6].title}</div>
    <button class="first wrong" ${questionSevenAnswered} onclick="answerSevenClick()">${model.data.questions[6].firstOption}</button>
    <button class="second wrong" ${questionSevenAnswered} onclick="answerSevenClick()">${model.data.questions[6].secondOption}</button>
    <button class="third wrong" ${questionSevenAnswered} onclick="answerSevenClick()">${model.data.questions[6].thirdOption}</button>
    <button class="fourth correct" ${questionSevenAnswered} onclick="correctAnswers(1); answerSevenClick()">${model.data.questions[6].fourthOption}</button>
    </div>

    <div class="questions-grid">
    <div class="title">${model.data.questions[7].title}</div>
    <button class="first wrong" ${questionEightAnswered} onclick="answerEightClick()">${model.data.questions[7].firstOption}</button>
    <button class="second wrong" ${questionEightAnswered} onclick="answerEightClick()">${model.data.questions[7].secondOption}</button>
    <button class="third wrong" ${questionEightAnswered} onclick="answerEightClick()">${model.data.questions[7].thirdOption}</button>
    <button class="fourth correct" ${questionEightAnswered} onclick="correctAnswers(1); answerEightClick()">${model.data.questions[7].fourthOption}</button>
    </div>
    `
}
