const btnForm1 = document.querySelector("#btnForm1");
const btnForm2 = document.querySelector("#btnForm2");
const btnSave1 = document.querySelector('#btnSave1');
const btnSave2 = document.querySelector('#btnSave2');
const btnCancel1 = document.querySelector('#btnCancel1');
const btnCancel2 = document.querySelector('#btnCancel2');


function editForm(index, event) {
    event.preventDefault();

    let form, inputs, buttonContainer

    if (index === 1) {
        form = document.querySelector('#form1');
        inputs = form.querySelectorAll("input");
        buttonContainer = document.querySelector("#button-container1");

        btnForm1.style.display = "none";
        buttonContainer.style.display = "flex";


    } else {
        form = document.querySelector('#form2');
        inputs = form.querySelectorAll("input");
        buttonContainer = document.querySelector("#button-container2");

        btnForm2.style.display = "none";
        buttonContainer.style.display = "flex";


    }

    inputs.forEach(function (input) {
        input.removeAttribute("disabled");
        input.classList.add("enabled-input");
    });

    selects = form.querySelectorAll("select");
    selects.forEach(function (select) {
        select.removeAttribute("disabled");
    });


}

btnForm1.addEventListener("click", function (event) {
    editForm(1, event);
});

btnForm2.addEventListener("click", function (event) {
    editForm(2, event);
});



// Salvar Formulário
function SaveForm(index, event) {
    let form, inputs, buttonContainer;

    if (index === 1) {
        form = document.querySelector('#form1');
        buttonContainer = document.querySelector("#button-container1");
    } else {
        form = document.querySelector('#form2');
        buttonContainer = document.querySelector("#button-container2");
    }

    inputs = form.querySelectorAll("input:not([name='csrfmiddlewaretoken'])");
    inputs.forEach(function (input) {
        input.setAttribute("disabled", "true");
        input.classList.remove("enabled-input");
    });

    buttonContainer.style.display = "none";
}

btnSave1.addEventListener("click", function (event) {
    document.querySelector('#form1').submit();
    setTimeout(function () {
        SaveForm(1, event);
    }, 100);  // Aguarda 200 milissegundos antes de desabilitar os campos
});

btnSave2.addEventListener("click", function (event) {
    document.querySelector('#form2').submit();
    setTimeout(function () {
        SaveForm(2, event);
    }, 100);
});


