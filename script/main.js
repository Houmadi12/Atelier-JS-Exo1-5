// Une fonction de validation de formulaire
let lettre = null;
let response = document.getElementById("respons");

form.onsubmit = () => {
    lettre = document.getElementById("lettre").value.toUpperCase();

    // alert(typeof (lettre));
    if ((lettre === '1') || (lettre === '2') || (lettre === '3') || (lettre === '4') || (lettre === '5') ||
        (lettre === '6') || (lettre === '7') || (lettre === '8') || (lettre === '9') || (lettre === '0')) {
        respons.textContent = 'Saisissez une lettre svp';
    } else {

        if (lettre.length === 1) {
            if ((lettre === 'A') || (lettre === 'E') || (lettre === 'I') || (lettre === 'O' ||
                (lettre === 'U') || (lettre === 'Y'))) {
                respons.textContent = "La lettre saisie est une voyelle";
            } else {
                respons.textContent = "La lettre saisie est une consonne";
            }
        } else {
            respons.textContent = "Saissez une lettre";
        }
    }
    // respons.textContent = nb1+nb2;

    return false;
}



