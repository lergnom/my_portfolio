// 1. Перемещение по карточкам
// 2. Проверка на ввод данных
// 3. Сбор данных с карточек
// 4. Записывать все введенные данные
// 5. Работа прогресс бара
// 6. Подсветка рамки для радио и чекбоксов

//карточка ответов - объект
var answers = {
  2: null,
  3: null,
  4: null,
  5: null,
};

//кнопки вперед
var btnNext = document.querySelectorAll('[data-nav="next"]');

btnNext.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var thisCard = this.closest("[data-card]");
    var thisCardNumber = parseInt(thisCard.dataset.card);
    if (thisCard.dataset.validate == "novalidate") {
      navigate("next", thisCard);
      updateProgressBar("next", thisCardNumber);
    } else {
      saveAnswer(thisCardNumber, gatherCardData(thisCardNumber));

      if (isFilled(thisCardNumber) && checkOnRequired(thisCardNumber)) {
        navigate("next", thisCard);
        updateProgressBar("next", thisCardNumber);
      } else if (!checkOnRequired(thisCardNumber)) {
        alert("Проверьте email и согласие с политикой :(");
      } else {
        alert("Необходимо выбрать какой-то из ответов :(");
      }
    }
  });
});

//кнопки назад
var btnPrev = document.querySelectorAll('[data-nav="prev"]');

btnPrev.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var thisCard = this.closest("[data-card]");
    var thisCardNumber = parseInt(thisCard.dataset.card);

    navigate("prev", thisCard);
    updateProgressBar("prev", thisCardNumber);
  });
});

function navigate(direction, thisCard) {
  var thisCardNmb = parseInt(thisCard.dataset.card);
  var nextCard;
  direction === "next"
    ? (nextCard = thisCardNmb + 1)
    : (nextCard = thisCardNmb - 1);
  thisCard.classList.add("hidden");
  document
    .querySelector(`[data-card="${nextCard}"]`)
    .classList.remove("hidden");
}

//Собираем данные из текущей карточки
function gatherCardData(number) {
  var question;
  var result = [];

  //Найти карточку по номери и data атрибуту
  var currentCard = document.querySelector(`[data-card="${number}"]`);

  // Находим вопрос
  question = currentCard.querySelector("[data-question]").innerText;

  // Найти заполненные значения (radio и checkbox)
  var radcheckValues = currentCard.querySelectorAll(
    '[type="radio"],[type="checkbox"]'
  );
  radcheckValues.forEach(function (item) {
    if (item.checked) {
      result.push({
        name: item.name,
        value: item.value,
      });
    }
  });

  // // Найти заполненные значения (radio)
  // var radioValues = currentCard.querySelectorAll('[type="radio"]');
  // radioValues.forEach(function (item) {
  //   if (item.checked) {
  //     result.push({
  //       name: item.name,
  //       value: item.value,
  //     });
  //   }
  // });

  // // Найти заполненные значения (checkbox)
  // var checkBoxValues = currentCard.querySelectorAll('[type="checkbox"]');
  // checkBoxValues.forEach(function (item) {
  //   if (item.checked) {
  //     result.push({
  //       name: item.name,
  //       value: item.value,
  //     });
  //   }
  // });

  // Найти заполненные значения (input)
  var inputValues = currentCard.querySelectorAll(
    '[type="text"], [type="email"],[type="number"]'
  );
  inputValues.forEach(function (item) {
    itemValue = item.value;
    if (itemValue.trim() != "") {
      result.push({
        name: item.name,
        value: item.value,
      });
    }
  });

  // Заполняем объект с ответами
  var data = {
    question: question,
    answer: result,
  };
  return data;
}

// Функция записи в объект
function saveAnswer(number, data) {
  answers[number] = data;
}

//Проверка заполнения
function isFilled(number) {
  return answers[number].answer.length > 0;
}

//Проверка корректный Email
function validateEmail(email) {
  var pattern = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  return pattern.test(email);
}

//Проверка на заполненность required чекбоксов и email
function checkOnRequired(number) {
  var currentCard = document.querySelector(`[data-card="${number}"]`);
  var requiredFields = currentCard.querySelectorAll("[required]");
  var isValidArray = [];

  requiredFields.forEach(function (item) {
    if (item.type == "checkbox" && !item.checked) {
      isValidArray.push(false);
    } else if (item.type == "email" && !validateEmail(item.value)) {
      isValidArray.push(false);
    }
  });

  return !isValidArray.includes(false);
}

//подсвечиваем радиокнопку
document.querySelectorAll(".radio-group").forEach(function (item) {
  item.addEventListener("click", function (event) {
    var label = event.target.closest("label");
    if (label) {
      // отменяем актиывный класс у всех
      label
        .closest(".radio-group")
        .querySelectorAll("label")
        .forEach(function (item) {
          item.classList.remove("radio-block--active");
        });

      //добавляем активный класс
      label.classList.add("radio-block--active");
    }
  });
});

//Подсвечиваем картинки
document.querySelectorAll(".cards-group").forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (
      event.target.closest(".card-block__img") &&
      event.target.closest(".card-block__img").classList == "card-block__img"
    ) {
      event.target
        .closest(".cards-group")
        .querySelectorAll(".card-block__img")
        .forEach(function (item) {
          item.classList.remove("radio-block--active");
        });
      event.target
        .closest(".card-block__img")
        .classList.add("radio-block--active");
    }
  });
});

// Подсвечиваем чек бокс
document
  .querySelectorAll('label.checkbox-block input[type="checkbox"]')
  .forEach(function (item) {
    item.addEventListener("change", function () {
      if (item.checked) {
        item.closest("label").classList.add("checkbox-block--active");
      } else {
        item.closest("label").classList.remove("checkbox-block--active");
      }
    });
  });

//Изменение прогресс бара
//Зависит от количества кард (100% / кол-во)
function updateProgressBar(direction, cardNumber) {
  var cardsTotalNumber = document.querySelectorAll("[data-card").length;

  // направление
  if (direction == "next") {
    cardNumber = cardNumber + 1;
  } else if (direction == "prev") {
    cardNumber = cardNumber - 1;
  }

  var progress = ((cardNumber * 100) / cardsTotalNumber).toFixed();

  //полученные данные в разметку
  var progressBar = document
    .querySelector(`[data-card="${cardNumber}"]`)
    .querySelector(".progress");
  if (progressBar) {
    progressBar.querySelector(
      ".progress__label strong"
    ).innerText = `${progress}%`;
    progressBar.querySelector(
      ".progress__line-bar"
    ).style = `width: ${progress}%`;
  }
}
