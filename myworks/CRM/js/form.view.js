const formViewController = (function () {

    const Domstrings = {
        form: "#taskForm",
        product: "#exampleFormControlSelect1",
        name: "#name",
        email: "#email",
        phone: "#phone"
    }
    //Передадим данные из view
    function getFormData() {
        return {
            name: document.querySelector(Domstrings.name).value,
            email: document.querySelector(Domstrings.email).value,
            phone: document.querySelector(Domstrings.phone).value,
            product: document.querySelector(Domstrings.product).value
        }
    }

    return {
        DomStrings: Domstrings,
        getFormData: getFormData
    }

})()