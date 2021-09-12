const modelController = (function () {

    const tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
    const id = JSON.parse(localStorage.getItem("taskedit")) || [];
    const itemMenu = JSON.parse(localStorage.getItem("leftmenu")) || ["all"];

    //Объект статусов
    const TaskStatus = {
        all: ["Все", "badge-danger"],
        new: ["Новый", "badge-danger"],
        work: ["В работе", "badge-warning"],
        final: ["Завершенный", "badge-success"],
        arc: ["Архив", "badge-warning"]
    }

    //Объект курсов
    const ProductsList = {
        courseAll: "Все продукты",
        courseHtml: "Курс по верстке",
        courseJs: "Курс по JavaScript",
        courseVue: "Курс по VUE JS",
        coursePhp: "Курс по PHP",
        courseWordpress: "Курс по WordPress"
    }

    const filter = {
        status: "all",
        product: "courseAll"
    }

    //Конструктор для заявки
    class Tasks {
        constructor(name, email, phone, product) {
            this.id = tasksArray.length + 1;
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.product = product;
            this.status = this.getStatus();
            this.date = this.getDate();
        }

        getDate() {
            let date = new Date();
            return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
        }

        getStatus() {
            const keys = Object.keys(TaskStatus);
            const int = Math.floor(Math.random() * keys.length);
            return keys[int] === "all" ? "new" : keys[int];
        }
    }

    // Функция добавления новой заявки(задачи) на основе вызова конструктора
    function addTask(task) {
        const newTask = new Tasks(task.name, task.email, task.phone, task.product);
        tasksArray.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasksArray));
    }

    function getTasks() {
        return tasksArray
    };

    // Вернуть число новых заявок
    function getNew() {
        let int = 0;
        tasksArray.forEach(function (item) {
            if ((item.status === "new")) {
                int += 1;
            }
        });
        return int;
    }

    //Фильтр
    function filterTasks(product = "courseAll", status = "all") {
        let arr = tasksArray;
        if (product !== "courseAll") {
            arr = arr.filter(item => item.product === product)
        }
        if (status !== "all") {
            arr = arr.filter(item => item.status === status)
        }
        return arr;
        // if (index === "courseAll" && status === "all") {
        //     return tasksArray;
        // } else if (status === "all") {
        //     tasksArray.forEach(function (item) {
        //         if ((item.product === index)) {
        //             arr.push(item);
        //         }
        //     })
        //     return arr;
        // } else if (index === "courseAll") {
        //     tasksArray.forEach(function (item) {
        //         if ((item.status === status)) {
        //             arr.push(item);
        //         }
        //     })
        //     return arr;
        // } else {
        //     tasksArray.forEach(function (item) {
        //         if ((item.product === index) && (item.status === status)) {
        //             arr.push(item);
        //         }
        //     })
        //     return arr;
        // }
    }

    //Взять элементы по ID
    function getTaskById() {
        if (id.length !== 0) {
            const ID = Number.parseInt(id);
            return tasksArray.filter(item => item.id === ID);
        }
    }

    //Редактирование задачи
    function editTask(task) {
        let arr = tasksArray.filter(item => item.id !== task.id);
        localStorage.removeItem("tasks");
        arr.push(task);
        // Сортировка
        let sortArr = arr.slice(0);
        sortArr.sort(function (a, b) {
            return a.id - b.id;
        });

        localStorage.setItem("tasks", JSON.stringify(sortArr));

    }

    //Кнопки со страницы редактирования 
    function getStatusLeftMenu() {
        if (typeof itemMenu === 'object' || itemMenu === null || itemMenu.length === 0) {
            return "all"
        } else {

            return itemMenu;
        }

    }

    //Подсветка кнопок
    function menuActive() {
        document.querySelectorAll(".left-menu").forEach(function (item) {
            if (item.dataset.item === getStatusLeftMenu()) { item.classList.add("active"); }
        })
    }

    return {
        addTask: addTask,
        getTasks: getTasks,
        TaskStatus: TaskStatus,
        ProductsList: ProductsList,
        filterTasks: filterTasks,
        Tasks: Tasks,
        filter: filter,
        getNew: getNew,
        getTaskById: getTaskById,
        editTask: editTask,
        getStatusLeftMenu: getStatusLeftMenu,
        menuActive: menuActive
    }

})()