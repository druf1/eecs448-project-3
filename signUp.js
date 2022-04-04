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
        forms[i].readOnly = true;
        forms[i].style.color = "black";
        document.getElementById('create-btn').innerText = "Create Account";

    }

    //show description
    document.getElementById('description-header').style.display = 'block';
    document.getElementById('description').style.display = 'block';
}

//Called when the create account button is clicked
const createButtonHandler = function () {

}



//#region show hide arrows
const showArrows = function() {
    document.getElementById('prev-image').style.opacity = 1;
    document.getElementById('next-image').style.opacity = 1;
}

const hideArrows = function() {
    document.getElementById('prev-image').style.opacity = 0;
    document.getElementById('next-image').style.opacity = 0;
}
//#endregion 



initializePage();

console.log(document.getElementById('create-btn').getAttribute('type'));