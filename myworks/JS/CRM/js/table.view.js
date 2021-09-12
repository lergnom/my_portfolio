const tableViewController = (function () {

    const Domstrings = {
        table: "table",
        productItem: "#inputGroupSelect01",
        topmenu: ".btn-group",
        leftmenu: ".left-panel__navigation"

    }

    //Выпадающий список курсов
    function getProductItems(list) {
        const arr = Object.keys(list);
        const productList = document.querySelector(Domstrings.productItem);
        arr.forEach(function (item) {
            let listContent = `<option value="${item}">${list[item]}</option>`;
            productList.insertAdjacentHTML("beforeend", listContent);
        })
    }

    //Cтатусы заявок  - формируем меню
    function getStatusItems(list) {
        const arr = Object.keys(list);
        const statusList = document.querySelector(Domstrings.topmenu);
        const statusListLeft = document.querySelector(Domstrings.leftmenu).children[1];
        arr.forEach(function (item) {
            const menuContent = `<a href="${item}" data-item ="${item}" class="btn btn-light">${list[item][0]}</a>`;
            const leftMenuContent = `<li><a href="${item}" data-item ="${item}" class="left-menu">${list[item][0]}</a></li>`;
            statusList.insertAdjacentHTML("beforeend", menuContent);
            statusListLeft.insertAdjacentHTML("beforeend", leftMenuContent);
        })
    }


    //Заполнение таблицы с заявками
    function showTasks(arr, status, list) {
        let table = document.querySelector(Domstrings.table);
        table.innerHTML = ` <thead>
        <tr>
            <th>ID</th>
            <th>дата</th>
            <th>продукт</th>
            <th>имя</th>
            <th>email</th>
            <th>телефон</th>
            <th>статус</th>
            <th></th>
        </tr>
        </thead>`;

        arr.forEach(function (item) {
            let trContent = `  <tr>
            <th scope="row">${item.id}</th>
            <td>${item.date}</td>
            <td>${list[item.product]}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>
                <div class="badge badge-pill ${status[item.status][1]}">  
                    ${status[item.status][0]}
                </div>
            </td>
            <td>
                <a class="edit" data-id ="${item.id}" href="edit.html">Редактировать</a>
            </td>
            </tr>`;
            table.insertAdjacentHTML("beforeend", trContent);
        });

    };

    //Убираем  class active 
    function resetActive() {
        document.querySelectorAll(".btn").forEach(item => item.classList.remove('active'));
        document.querySelectorAll(".left-menu").forEach(item => item.classList.remove('active'));
    }
    // Иконка для новых заявок
    function addBadge(newItem) {
        let innerHTML = document.querySelector(".left-panel__navigation").children[1].children[1].innerHTML;
        innerHTML = innerHTML.replace(/<\/a>/, `<div class="badge">${newItem}</div></a>`);
        document.querySelector(".left-panel__navigation").children[1].children[1].innerHTML = innerHTML;

    }

    return {
        DomStrings: Domstrings,
        showTasks: showTasks,
        getProductItems: getProductItems,
        getStatusItems: getStatusItems,
        resetActive: resetActive,
        addBadge: addBadge
    }

})()