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

const QUEST_COUNT = 21; // кол-во вопросов
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
function checkCorrectAnswer(questId, target, answer) {
  let answerState = false;
  if (Array.isArray(target)) {
    answerState = target.some((target) => target == answer);
  } else {
    answerState = target == answer;
  }

  if (answerState) {
    // записываем первую попытку в questState
    setQuestState(questId, true);
    alert("Правильно!");
  } else {
    // записываем первую попытку в questState
    setQuestState(questId, false);
    alert("Неправильно, решите ещё раз");
  }
}

function displayQuestionState() {
  const correctQuestionsCount = Object.values(questState).filter(
    (state) => state == true
  ).length; // Фильтруем коллекцию ответов - берем только правильные (у которых state равен true)

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
  checkCorrectAnswer(1, 13, answer);
}

function showModal2() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(2, 3241, answer);
}
function showModal3() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(3, 3, answer);
}
function showModal4() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(4, 1360, answer);
}
function showModal5() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(5, 0.25, answer);
}
function showModal6() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(6, 700, answer);
}
function showModal7() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(7, 2341, answer);
}
function showModal8() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(8, 14, answer);
}
function showModal9() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(9, 4, answer);
}
function showModal10() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(10, 155, answer);
}
function showModal11() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(11, 136, answer);
}
function showModal12() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(12, 7, answer);
}
function showModal13() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(13, 1008, answer);
}
function showModal14() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(14, 4, answer);
}
function showModal15() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(15, 40700, answer);
}
function showModal16() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(16, 1, answer);
}
function showModal17() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(17, 1, answer);
}
function showModal18() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(18, 1432, answer);
}
function showModal19() {
  let name = prompt("Ваш ответ?", "");
  checkCorrectAnswer(19, 222000, answer);
}
function showModal20() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(20, 7, answer);
}
function showModal21() {
  let answer = prompt("Ваш ответ?", "");
  checkCorrectAnswer(21, 27, answer);
}
