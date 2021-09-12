const formController = (function (modelCon, uiCon) {

    const setupEventListner = function () {
        document.querySelector(uiCon.DomStrings.form).addEventListener('submit', addTask);
    }

    function addTask(event) {
        event.preventDefault();
        //Получаем данные из View
        const arr = uiCon.getFormData();
        //Передаем данные в Model
        modelCon.addTask(arr);
        // modelCon.addTaskNew(arr);
        //Обновляем данные на странице
        setTestData();
    }

    function init() {
        console.log("CRM work!");
        setupEventListner();
    }

    return {
        init: init
    }

})(modelController, formViewController)

formController.init();