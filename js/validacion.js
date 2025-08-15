function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("botonDeRegistro").addEventListener("click", function() {

    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password1").value;
    let repetirPassword = document.getElementById("password2").value;
    let terminos = document.getElementById("terminos").checked;

    if (!nombre || !apellido || !email || !password || !repetirPassword) {
        showAlertError();
        return;
    }

    if (password.length < 6) {
        showAlertError();
        return;
    }

    if (password !== repetirPassword) {
        showAlertError();
        return;
    }

    if (!terminos) {
        showAlertError();
        return;
    }

    showAlertSuccess();
});