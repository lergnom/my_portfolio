const editController = (function (model, view) {

    const setupEventListner = function () {
        document.getElementById(view.Domstrings.btnSave).addEventListener('click', editTask);
        document.getElementById(view.Domstrings.btnArc).addEventListener('click', arcTask);
        document.querySelector(view.Domstrings.leftmenu).children[1].addEventListener('click', moveMenu);
    }

    // Редактировать 
    function editTask(event) {
        //Получаем данные из View
        const arr = view.getFormData();
        //Передаем данные в Model
        model.editTask(arr);
    }

    //Перенести в архив
    function arcTask(event) {
        const arr = view.getFormData();
        arr.status = "arc";
        model.editTask(arr);
    }

    function moveMenu(event) {
        let indexStatus = event.target.classList[0] === "badge" ? "new" : event.target.dataset.item;
        localStorage.setItem("leftmenu", JSON.stringify(indexStatus));
    }

    view.getProductItems(model.ProductsList);
    view.getProductItems(model.TaskStatus);
    view.showId(model.getTaskById());
    view.getStatusItems(model.TaskStatus);
    view.addBadge(model.getNew());
    setupEventListner();
    model.menuActive()
  

})(modelController, editView)