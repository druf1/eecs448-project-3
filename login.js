const info = [
    "Login:",
    "Password:",
];

let imageSources = [
    "animals-main-img-placeholder.png",
    "cat-image-placeholder-2.jpg"
];

let imageIndex = 0;

const initializePage = function () {
    let labels = document.getElementById('info-div').getElementsByTagName('label');
    let forms = document.getElementById('info-div').getElementsByTagName('input');
    for(let i = 0; i < labels.length; i++) {
        labels[i].innerText = info[i];
        forms[i].value = info[i].toString().slice(0,-1);
        forms[i].readOnly = true;
        forms[i].style.color = "black";
        document.getElementById('login-btn').innerText = "Login";
        document.getElementById('forgot-pw-btn').innerText = "Forgot Password?";

    }

    //show description
    document.getElementById('description-header').style.display = 'block';
    document.getElementById('description').style.display = 'block';
}

//Called when the login button is clicked
const loginButtonHandler = function () {

}

//Called when the forgot password button is clicked
const forgotPWButtonHandler = function () {

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

console.log(document.getElementById('login-btn').getAttribute('type'));