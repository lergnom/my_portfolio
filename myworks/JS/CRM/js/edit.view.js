const editView = (function () {

    const Domstrings = {
        table: "table",
        editItem: "#inputGroupSelect01",
        editStatus: "#inputGroupSelect02",
        date: "editDate",
        id: "editId",
        name: "editName",
        phone: "editPhone",
        email: "editEmail",
        btnSave: "saveEdit",
        btnArc: "arcExe",
        leftmenu: ".left-panel__navigation"
    }

    function getProductItems(list) {
        const arr = Object.keys(list);
        const productList = document.querySelector(Domstrings.editItem);
        const statusList = document.querySelector(Domstrings.editStatus)
        if (arr[0] === "courseAll") {
            arr.forEach(function (item) {
                if (item !== "courseAll") {
                    let listContent = `<option value="${item}">${list[item]}</option>`;
                    productList.insertAdjacentHTML("beforeend", listContent);
                }
            })
        }
        if (arr[0] === "all") {
            arr.forEach(function (item) {
                if (item !== "all" /*&& item !== "arc"*/) {
                    let listContent = `<option value="${item}">${list[item][0]}</option>`;
                    statusList.insertAdjacentHTML("beforeend", listContent);
                }
            })
        }
    }

    function showId(item) {
        if (item.length === 1) {
            document.getElementById(Domstrings.id).textContent = `Заявка №${item[0].id}`;
            document.getElementById(Domstrings.date).textContent = item[0].date;
            document.getElementById(Domstrings.name).value = item[0].name;
            document.getElementById(Domstrings.phone).value = item[0].phone;
            document.getElementById(Domstrings.email).value = item[0].email;
            document.querySelector(Domstrings.editItem).value = item[0].product;
            document.querySelector(Domstrings.editStatus).value = item[0].status;
        }
    }

    //Данные для редактирования
    function getFormData() {
        return {
            id: Number.parseInt(document.getElementById(Domstrings.id).textContent.split('№', 2)[1]),
            date: document.getElementById(Domstrings.date).textContent,
            name: document.getElementById(Domstrings.name).value,
            phone: document.getElementById(Domstrings.phone).value,
            email: document.getElementById(Domstrings.email).value,
            product: document.querySelector(Domstrings.editItem).value,
            status: document.querySelector(Domstrings.editStatus).value
        }
    }

    function getStatusItems(list) {
        const arr = Object.keys(list);
        const statusListLeft = document.querySelector(Domstrings.leftmenu).children[1];
        arr.forEach(function (item) {
            const leftMenuContent = `<li><a href="allbids.html" data-item ="${item}" class="left-menu">${list[item][0]}</a></li>`;
            statusListLeft.insertAdjacentHTML("beforeend", leftMenuContent);
        })
    }

    function addBadge(newItem) {
        let innerHTML = document.querySelector(".left-panel__navigation").children[1].children[1].innerHTML;
        innerHTML = innerHTML.replace(/<\/a>/, `<div class="badge">${newItem}</div></a>`);
        document.querySelector(".left-panel__navigation").children[1].children[1].innerHTML = innerHTML;

    }

    return {
        Domstrings: Domstrings,
        showId: showId,
        getProductItems: getProductItems,
        getFormData: getFormData,
        getStatusItems: getStatusItems,
        addBadge: addBadge
    }

})()