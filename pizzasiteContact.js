const form = document.forms[0];
console.log(form)

form.addEventListener("submit", function (e) {
    if (form.name.value.length == 0 || form.surname.value.length == 0) {
        e.preventDefault()
    }
    else{
        alert("Форма отправлена");
    }

})
