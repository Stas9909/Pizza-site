const form = document.forms[0];
console.log(form)

form.addEventListener("submit", function (e) {
    if (form.name.value.length == 0 || form.surname.value.length == 0) {
        e.preventDefault()
        // form.name.setCustomValidity("Введите имя пользователя.");
        // form.surname.setCustomValidity("Введите фамиию пользователя.");
    }
    else{
        // form.name.setCustomValidity("");
        // form.surname.setCustomValidity("");
        alert("Форма отправлена");
    }

})
