var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const QUEST_COUNT = 31; // сумма всех баллов
let questState = {};

function setQuestState(questId, state) {
  // Если первый раз ответили неправильно, то не даем перезаписать
  if (questState[questId] !== undefined) {
    return;
  }

  questState[questId] = state;
}

// Для проверки правильности ответа передаем сюда:
// идВопроса (questId - можно указывать число)
// правильный ответ (target - строка с которой сравниваем)
// ответ пользователя (answer)
function checkCorrectAnswer(
  questId,
  target,
  answer,
  weight = 1,
  countEach = false
) {
  if (countEach && Array.isArray(target) && answer.split(",").length) {
    let answers = answer.split(",").map((a) => a.trim());
    let correctAnswerCount = 0;

    for (let i = 0; i < target.length; i++) {
      const answerIndex = answers.findIndex((a) => a == target[i]);
      if (answerIndex !== -1) {
        correctAnswerCount += 1;
        answers.splice(answerIndex, 1);
      }
      // записываем первую попытку в questState
      setQuestState(`${questId}_${i}`, answerIndex !== -1 ? weight : 0);
    }
    alert("Ответ засчитан");

    return;
  }

  if (target == answer) {
    // записываем первую попытку в questState
    setQuestState(questId, weight);
    alert("Правильно!");
  } else {
    // записываем первую попытку в questState
    setQuestState(questId, 0);
    alert("Неправильно, решите ещё раз");
  }
}

function displayQuestionState() {
  const correctQuestionsCount = Object.values(questState).reduce(
    (res, state) => {
      res += state;
      return res;
    }
  ); // Фильтруем коллекцию ответов - берем только правильные (у которых state не равен 0)

  document.getElementById("show_result").style.visibility = "hidden";
  document.getElementById("quest_state_block").style.visibility = "visible";
  document.getElementById("correct_answer_count").textContent =
    correctQuestionsCount;
  document.getElementById("all_quest_count").textContent = QUEST_COUNT;
}

function dropQuestionState() {
  questState = {};

  document.getElementById("show_result").style.visibility = "visible";
  document.getElementById("quest_state_block").style.visibility = "hidden";
  document.getElementById("correct_answer_count").textContent = "";
  document.getElementById("all_quest_count").textContent = "";
}
function showModal1() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(1, 27, answer);
}

function showModal2() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(2, 6, answer);
}
function showModal3() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(3, 24, answer);
}
function showModal4() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(4, 0.72, answer);
}
function showModal5() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(5, 5, answer);
}
function showModal6() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(6, 0.3, answer);
}
function showModal7() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(7, -24, answer);
}
function showModal8() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(8, 6, answer);
}
function showModal9() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(9, 10, answer);
}
function showModal10() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(10, 25, answer);
}
function showModal11() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(11, 5, answer);
}
function showModal12() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(12, -5, answer);
}
function showModal13() {
  let answer = prompt("Ваш ответ?", "");
  // 2 балла
  checkCorrectAnswer(
    13,
    ["{4}∩{2π/3 + 2πk, -2π/3 + 2πk: k ∈ Z}; 2π/3"],
    answer,
    2
  );
}
function showModal14() {
  let answer = prompt("Ваш ответ?", "");
  // 3 балла
  checkCorrectAnswer(14, "11√3/2", answer, 3);
}
function showModal15() {
  let answer = prompt("Ваш ответ?", "");
  // 2 балла
  checkCorrectAnswer(15, "(-∞ ; -1) U (-1 ; 0]", answer, 2);
}
function showModal16() {
  let answer = prompt("Ваш ответ?", "");
  // 2 балла
  checkCorrectAnswer(16, 90, answer, 2);
}
function showModal17() {
  let answer = prompt("Ваш ответ?", "");
  //3 балла
  checkCorrectAnswer(17, "2:1", answer, 3);
}
function showModal18() {
  let answer = prompt("Ваш ответ?", "");
  // 4 балла
  checkCorrectAnswer(18, "(-∞ ; -3/4] U [3/4 ; ∞)", answer, 4);
}
function showModal19() {
  let answer = prompt("Ваш ответ?", "");
  //2 балла 2 ответа
  checkCorrectAnswer(19, ["Да", "Да"], answer, 1, true);
}
