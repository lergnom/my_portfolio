var controller = (function (budgetCtrl, uiCtrl) {

  var setupEventListeners = function () {
    var DOM = uiCtrl.getDomString()
    document.querySelector(DOM.form).addEventListener("submit", ctrAddItem);
    document.querySelector(DOM.budgetTable).addEventListener("click", ctrDeleteItem);
  }

  //Обновлени процентов
  function updatePercentages() {
    // Посчитать порценты для Exp в модели и получить их.
    budgetCtrl.calculatePercentages();
    // budgetCtrl.test();

    var idsAndPercents = budgetCtrl.getAllIdsAndPercentages();
    // console.log("updatePercentages -> idsAndPercents", idsAndPercents)
    // обновить  проценты
    uiCtrl.updateItemsPercentages(idsAndPercents);
  }

  // при Отправке формы
  function ctrAddItem() {
    event.preventDefault();
    //Получить данные из формы
    var input = uiCtrl.getInput();
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      budgetCtrl.test();
      uiCtrl.renderListItem(newItem, input.type);
      uiCtrl.clearFields();
      generateTestData.init();
      updateBudget();
      updatePercentages();
    }
  }

  function ctrDeleteItem(event) {
    var itemID, splitID, type, ID;
    if (event.target.closest(".item__remove")) {
      itemID = event.target.closest("li.budget-list__item").id;
      splitID = itemID.split("-");
      type = splitID[0];
      ID = parseInt(splitID[1]);
      //Удалить запись из модели
      budgetCtrl.deleteItem(type, ID);
      //Удалить запись из шаблона
      uiCtrl.deleteListItem(itemID);
      //обновить бюджет
      updateBudget();
      //обновить проценты
      updatePercentages();
    }
  }

  function updateBudget() {
    //Рассчитать бюджет в модели
    budgetCtrl.calculateBudget();
    //Получить бюджет из модели
    budgetObj = budgetCtrl.getBudget();
    //отобразить в  шаблоне
    uiCtrl.updateBudget(budgetObj);
  }
  return {
    init: function () {
      console.log("App started!");
      uiCtrl.displayMonth();
      setupEventListeners();
      uiCtrl.updateBudget({
        budget: 0,
        totalInc: 0,
        totalExpt: 0,
        percentage: 0
      });
    }
  }

})(modelController, viewController);

controller.init();