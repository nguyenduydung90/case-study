class Question {
    constructor(content, answer, correctAnswer, money) {
        this.content = content;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
        this.money = money;
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }
}

let index = 1;
let timeCount;
let message;
let timeID = setInterval(function () {
    // document.getElementById('time1').innerHTML = timeCount;
    timeCount--;
    countdown();
}, 1000);

let question1 = new Question("Câu 1: Rượu vang được lên men từ loại quả nào là chủ yếu?", ["A.Táo", "B.Cam", "C.Xoài", "D.Nho"], "D.Nho", "1.000.000 VNĐ");
let question2 = new Question("Câu 2: CodeGym có bao nhiêu trung tâm?", ["A. 4", "B. 5", "C. 6", "D. 7"], "B. 5", "1.500.000 VNĐ");
let question3 = new Question("Câu 3:'El Nino' là gì?", ["A. Một món ăn", "B. Một loại cây", "C. Một hiện tượng thời tiết", "D. Một địa danh"], "C. Một hiện tượng thời tiết", "2.000.000 VNĐ");
let question4 = new Question("Câu 4:Nòng nọc xuất hiện trong vòng đời của loài vật nào?", ["A. Rắn", "B. Tằm", "C. Ếch", "D. Bướm"], "C. Ếch", "2.500.000 VNĐ");
let question5 = new Question("Câu 5:Loại củ nào giúp vết thương mau lành, không để lại sẹo?", ["A. Gừng", "B. Hành", "C. Ớt", "D. Nghệ"], "D. Nghệ", "5.000.000 VNĐ");

let question = [question1, question2, question3, question4, question5];
let getQuestion = document.getElementById('question');
showQuestion(question1);



function next(index) {
    ++index;
    showQuestion(question[index]);
}

function showQuestion(question_1) {
    getQuestion.innerHTML = question_1.content;
    getQuestion.setAttribute("idQuestion", question.indexOf(question_1));
    for (let i = 0; i < 5; i++) {
        let getaswId = document.getElementById('asw' + (i + 1));
        getaswId.innerHTML = question_1.answer[i];
    }
}

function chooseAswer(id) {
    a.innerHTML = soundCorect.getSound();
    let answer = document.getElementById(id).innerHTML;
    let getQestId1 = document.getElementById('question');
    let idQuestion = parseInt(getQestId1.getAttribute("idQuestion"));

    if (!confirm("Đây có phải là đáp án cuối cùng của bạn không")) {
        return ;
    }
    if (question[idQuestion].checkAnswer(answer)) {
        alert('Chúc mừng bạn. Câu trả lời đúng');
        document.getElementById('result').innerHTML = "Tiền thưởng: " + (question[idQuestion].money);

        if (idQuestion === 4) {
            a.innerHTML = win.getSound()
            alert("You win");
            timeCount=1
            // window.reload();
        }
        next(idQuestion);
    }
     else {
        a.innerHTML = soundWrong.getSound();
        alert('Câu trả lời sai. Mời bạn chơi lại');
        timeCount=1;
        timeID
    }
}

function countdown() {
    if (timeCount < -1) {
        clearInterval(timeID);
        message = window.confirm('Mời bạn chơi lại');
        reload()
    }
}

function reload() {
    location.replace("index.html");
}
