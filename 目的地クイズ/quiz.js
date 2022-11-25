start = null;

const videoElement = document.querySelector("video");

const btn_play = document.getElementById("btn_play");
btn_play.addEventListener("click",
    function () {
        //player = window.prompt('name');
        videoElement.play();
        start = performance.now();
        timeId = setInterval(updateParagraph, 10);
        for (const choice of useQuizData.choices) {
            quizAnswerSelect.innerHTML += `<input
            id = "${choice.id}" class="radio-inline__input"
            type = "radio" name = "answer" value = "${choice.id}" > <label
                class="radio-inline__label"
                for="${choice.id}">${choice.value}</label>`
            quizSendButton.hidden = false;
            quizHint.hidden = false;
            quizHint.onclick = function () {
                quizHint2.hidden = false;
            }
            quizSendButton.onclick = ev => {
                for (const element of
                    quizAnswerSelect.querySelectorAll("input")) {
                    if (element.checked) {
                        const result = element.id == useQuizData.correctId;
                        // const str = result ? "正解です" : "不正解です";
                        if (str = result) {
                            str = '正解です'; stop();
                        } else {
                            str = '不正解です'; start -= 46300000000;
                            /// start +=3000000;
                        }
                        quizResult.innerHTML = `<p>${str}</p>`;
                    }
                }
            };
        }
    }, { once: true });

//問題文のデータを定義
const quizData = [
    {
        choices: [
            { id: 1, value: "Tech Runway 堺教室" },
            { id: 2, value: "京セラドーム" },
            { id: 3, value: "関西国際空港" },
            { id: 4, value: "万博記念公園" },
        ],
        correctId: 1,
    },
    {

    }
];

//クイズの問題文を入れるHTML要素の取得
const quizSentence =
    document.getElementById('quiz_sentence');
const quizAnswerSelect =
    document.getElementById('quiz_answer_select');
let quizSendButton =
    document.getElementById('quiz_send_button');
let quizHint =
    document.getElementById('quiz_hint');
let quizHint2 =
    document.getElementById('quiz_hint2');
const quizResult =
    document.getElementById('quiz_result');


const useQuizData = quizData[0];

function updateParagraph() {
    const end = performance.now();
    const time = Math.round(end - start) / 1000;
    document.getElementById('quiz-time').innerText = '経過時間' + time + '秒';
}


function stop() {
    clearInterval(timeId);
    videoElement.pause();
}

quizHint.addEventListener(
    'click',
    function(){
        start -= 334000;
    },
    {once:true}
);