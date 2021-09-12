var viewController = (function () {
  var DOMstrings = {
    inputType: "#input__type",
    inputDescription: "#input__description",
    inputValue: "#input__value",
    form: "#budget-form",
    incomeContainer: "#income__list",
    expenseContainer: "#expenses__list",
    budgetLabel: "#budget-value",
    incomLabel: "#income-label",
    expensesLabel: "#expense-label",
    expensesPercentLabel: "#expense-percent-label",
    budgetTable: "#budget-table",
    monthLabel: "#month",
    yearLabel: "#year",
  };

  function getInput() {
    return {
      type: document.querySelector(DOMstrings.inputType).value,
      description: document.querySelector(DOMstrings.inputDescription).value,
      value: document.querySelector(DOMstrings.inputValue).value,
    }
  }

  //Форматирование числа
  function formatNumber(num, type) {
    var num, numSplit, newInt, resultNumber;
    //
    num = Math.abs(num);
    num = num.toFixed(2); // 10.00
    numSplit = num.split(".");
    int = numSplit[0];
    dec = numSplit[1];
    //Форматирование числа int - добавление ","
    if (int.length > 3) {
      newInt = "";
      for (var i = 0; i < int.length / 3; i++) {
        newInt = "," + int.substring(int.length - 3 * (i + 1), int.length - 3 * i) + newInt;
      }
      if (newInt[0] === ",") {
        newInt = newInt.substring(1);
      }
    } else if (int === "0") {
      newInt = "0";
    } else {
      newInt = int;
    }

    resultNumber = newInt + "." + dec;
    if (newInt !== "0") {
      if (type === "exp") {
        resultNumber = "- " + resultNumber;
      } else if (type === "inc") {
        resultNumber = "+ " + resultNumber;
      }
    }
    return resultNumber;
  }

  //Метод генерации шаблона HTML
  function renderListItem(obj, type) {
    var containerElement, html;
    if (type === "inc") {
      containerElement = DOMstrings.incomeContainer;
      html = `<li id="inc-%id%" class="budget-list__item item item--income">
                <div class="item__title">%description%</div>
                  <div class="item__right">
                    <div class="item__amount">%value%</div>
                    <button class="item__remove">
                    <img src="./img/circle-green.svg" alt="delete" />
                    </button>
                    </div>
                </li>`;
    } else {
      containerElement = DOMstrings.expenseContainer;
      html = ` <li id="exp-%id%" class="budget-list__item item item--expense">
                  <div class="item__title">%description%</div>
                    <div class="item__right">
                       <div class="item__amount">%value% 
                        <div class="item__badge">
                        <div class="item__percent badge badge--dark"></div>
                        </div>
                      </div>
                    <button class="item__remove">
                      <img src="./img/circle-red.svg" alt="delete" />
                    </button>
                </div>
              </li>`;
    }
    newHtml = html.replace("%id%", obj.id);
    newHtml = newHtml.replace("%description%", obj.description);
    newHtml = newHtml.replace("%value%", formatNumber(obj.value, type));
    document.querySelector(containerElement).insertAdjacentHTML("beforeend", newHtml);
  }

  //Очиcтить поля
  function clearFields() {
    var inputDesc, inputVal;
    inputDesc = document.querySelector(DOMstrings.inputDescription);
    inputVal = document.querySelector(DOMstrings.inputValue);
    inputDesc.value = "";
    inputDesc.focus();
    inputVal.value = "";
  }


  function updateBudget(obj) {
    var type;
    if (obj.budget > 0) {
      type = "inc"
    } else {
      type = "exp"
    }

    document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
    document.querySelector(DOMstrings.incomLabel).textContent = formatNumber(obj.totalInc, "inc");
    document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExpt, "exp");


    if (obj.percentage > 0) {
      document.querySelector(DOMstrings.expensesPercentLabel).style.display = "block";
      document.querySelector(DOMstrings.expensesPercentLabel).textContent = obj.percentage + "%";
    } else {
      document.querySelector(DOMstrings.expensesPercentLabel).style.display = "none";
      // document.querySelector(DOMstrings.expensesPercentLabel).textContent = "--";
    }
  }


  function deleteListItem(itemID) {
    document.getElementById(itemID).remove();
  }

  function updateItemsPercentages(items) {
    items.forEach(function (item) {
      var el = document.getElementById(`exp-${item[0]}`).querySelector(".item__percent");

      if (item[1] >= 0) {
        el.textContent = item[1] + "%";
        el.parentElement.style.display = "block";
      } else {
        el.parentElement.style.display = "none";
      }
    })
  }

  function displayMonth() {
    var now, year, month, monthArr;
    now = new Date();
    year = now.getFullYear();
    monthArr = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    month = monthArr[now.getMonth()];
    document.querySelector(DOMstrings.monthLabel).innerText = month;
    document.querySelector(DOMstrings.yearLabel).innerText = year;
  }

  return {
    renderListItem: renderListItem,
    getInput: getInput,
    clearFields: clearFields,
    updateBudget: updateBudget,
    deleteListItem: deleteListItem,
    updateItemsPercentages: updateItemsPercentages,
    displayMonth: displayMonth,
    getDomString: function () {
      return DOMstrings;
    },
  };
})();
