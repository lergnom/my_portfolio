const Test = function (name, email, phone, product) {
    this.name = name,
    this.email = email,
    this.phone = phone,
    this.product = product
}

const testData = [
    new Test("Иванов Иван Петрович", "ivanov@gmail.com", 892193824142, "courseHtml"),
    new Test("Петров Игорь Анатольевич", "petrov@mail.ru", 89245323424, "courseJs"),
    new Test("Селиванов Виталий Андросович", "selivan@inbox.ru", 4359483594, "courseVue"),
    new Test("Бирюков Павел Геннадьевич", "burikov@bur.go", 89232219382, "coursePhp"),
    new Test("Пушкин Николай Николаевич", "push@kin.com", 847467374637, "courseWordpress"),
    new Test("Медведев Дмитрий Анатольевич", "medvedev@utok.net", 89234534519382, "courseJs"),
    new Test("Путин Владимир Владимирович", "navseh@pofig.com", 89219343543582, "courseVue")
]

function getRandomTest(int) {
    return Math.floor(Math.random() * int);
}



function setTestData() {
    const rnd = getRandomTest(testData.length);
    const rndTask = testData[rnd];
    document.querySelector("#name").value = rndTask.name,
    document.querySelector("#email").value = rndTask.email,
    document.querySelector("#phone").value = rndTask.phone,
    document.querySelector("#exampleFormControlSelect1").value = rndTask.product;
}

setTestData();
