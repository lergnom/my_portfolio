const tableController = (function (model, view) {

    const setupEventListner = function () {
        document.querySelector(view.DomStrings.productItem).addEventListener('click', selectTasks);
        document.querySelector(view.DomStrings.topmenu).addEventListener('click', selectTasks);
        document.querySelector(view.DomStrings.leftmenu).children[1].addEventListener('click', selectTasks);
        if (document.querySelector(view.DomStrings.table)) {
            document.querySelector(view.DomStrings.table).addEventListener("click", jumpEdit);
        }
    }

    function selectTasks(event) {
        event.preventDefault();
        if (event.target.classList[0] === "btn" || event.target.classList[0] === "left-menu" || event.target.classList[0] === "badge") {
            view.resetActive();
            let indexStatus = event.target.classList[0] === "badge" ? "new" : event.target.dataset.item;
            model.filter.status = indexStatus;
            event.target.classList.add("active");
        } else {
            const indexProduct = event.target.value.trim();
            model.filter.product = indexProduct;

        }
        const arrTasks = model.filterTasks(model.filter.product, model.filter.status);
        view.showTasks(arrTasks, model.TaskStatus, model.ProductsList);
        localStorage.setItem("leftmenu", JSON.stringify(model.filter.status));
    }
    //передать элемент для редактирования
    function jumpEdit(event) {
        if (event.target.classList[0] === "edit") {
            localStorage.setItem("taskedit", JSON.stringify(event.target.dataset.id));
        }
    }

    function init() {
        console.log("table work!");
        setupEventListner();
        view.getProductItems(model.ProductsList);
        view.getStatusItems(model.TaskStatus);
        view.addBadge(model.getNew());
        view.showTasks(model.getTasks(), model.TaskStatus, model.ProductsList);


        model.filter.status = model.getStatusLeftMenu();
        const Tasks = model.filterTasks(model.filter.product, model.filter.status);
        view.showTasks(Tasks, model.TaskStatus, model.ProductsList);

        model.menuActive()

    }

    return {
        init: init
    }

})(modelController, tableViewController)

tableController.init()