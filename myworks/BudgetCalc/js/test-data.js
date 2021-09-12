var generateTestData = (function () {
    var ExampleItem = function (type, desc, sum) {
        this.type = type;
        this.desc = desc;
        this.sum = sum;
    }
    var testData = [
        new ExampleItem("inc", "Зарплата", 2000),
        new ExampleItem("inc", "Фриланс", 1500),
        new ExampleItem("inc", "Партнерская программа", 1000),
        new ExampleItem("inc", " Продажа digital", 500),
        new ExampleItem("exp", "Рента", 600),
        new ExampleItem("exp", "Бензин", 60),
        new ExampleItem("exp", "Продукты", 380),
        new ExampleItem("exp", "Развлечения", 400),
    ];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };

    function insertInUI() {
        //Получени случайного элемента
        var random = getRandomInt(testData.length);
        var randomItem = testData[random];

        document.querySelector("#input__type").value = randomItem.type;
        document.querySelector("#input__description").value = randomItem.desc;
        document.querySelector("#input__value").value = randomItem.sum;
    };

    return {
        init: insertInUI

    }


})()

generateTestData.init();