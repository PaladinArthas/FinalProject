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
  if (target == answer) {
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
  let name = prompt("Ваш ответ?", "");
  if (name == 3241) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal3() {
  let name = prompt("Ваш ответ?", "");
  if (name == 3) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal4() {
  let name = prompt("Ваш ответ?", "");
  if (name == "1360") {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal5() {
  let name = prompt("Ваш ответ?", "");
  if (name == "0,25") {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal6() {
  let name = prompt("Ваш ответ?", "");
  if (name == 700) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal7() {
  let name = prompt("Ваш ответ?", "");
  if (name == 2341) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal8() {
  let name = prompt("Ваш ответ?", "");
  if (name == 14) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal9() {
  let name = prompt("Ваш ответ?", "");
  if (name == 4) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal10() {
  let name = prompt("Ваш ответ?", "");
  if (name == 155) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal11() {
  let name = prompt("Ваш ответ?", "");
  if (name == 136) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal12() {
  let name = prompt("Ваш ответ?", "");
  if (name == 7) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal13() {
  let name = prompt("Ваш ответ?", "");
  if (name == 1008) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal14() {
  let name = prompt("Ваш ответ?", "");
  if (name == 4) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal15() {
  let name = prompt("Ваш ответ?", "");
  if (name == 40700) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal16() {
  let name = prompt("Ваш ответ?", "");
  if (name == 1) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal17() {
  let name = prompt("Ваш ответ?", "");
  if (name == 1) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal18() {
  let name = prompt("Ваш ответ?", "");
  if (name == 1432) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal19() {
  let name = prompt("Ваш ответ?", "");
  if (name == 222000) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal20() {
  let name = prompt("Ваш ответ?", "");
  if (name == 7) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
function showModal21() {
  let name = prompt("Ваш ответ?", "");
  if (name == 27) {
    alert("Правильно!");
  } else {
    alert("Неправильно, решите ещё раз");
  }
}
