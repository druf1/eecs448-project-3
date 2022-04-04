const info = [
    "Username:",
    "Password:",
    "Confirm Password:"
];


const initializePage = function () {
    let labels = document.getElementById('info-div').getElementsByTagName('label');
    let forms = document.getElementById('info-div').getElementsByTagName('input');
    for(let i = 0; i < labels.length; i++) {
        labels[i].innerText = info[i];
        forms[i].value = info[i].toString().slice(0,-1);
        forms[i].style.color = "black";
        document.getElementById('create-btn').innerText = "Create Account";

    }
}

//Called when the create account button is clicked
const createButtonHandler = function () {

}

initializePage();

console.log(document.getElementById('create-btn').getAttribute('type'));