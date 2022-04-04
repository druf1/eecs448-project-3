const info = [
    "Name:",
    "ID:",
    "Level:",
    "Birth Date:",
    "Address:"
];

let imageSource = "foster-placeholder.jpg";

let imageIndex = 0;

//initialize page
const initializePage = function () {
    let labels = document.getElementById('info-div').getElementsByTagName('label');
    let forms = document.getElementById('info-div').getElementsByTagName('input');
    for(let i = 0; i < labels.length; i++) {
        labels[i].innerText = info[i];
        forms[i].value = info[i].toString().slice(0,-1);
        forms[i].readOnly = true;
        forms[i].style.color = "black";
    }

    //set image source
    document.getElementById('animal-image').src = imageSource;

    //clear image selection
    clearSelection();

    //get animals
    printAnimals();

    //add animal subtitle
    
}

//editbutton handler
const editButtonHandler = function () {
    if(document.getElementById('edit-btn').innerText == "Edit") editFosterInfo();
    else submitEdits();
}

//edit foster
const editFosterInfo = function() {
    //loop through each form allow them to be editable
    let forms = document.getElementsByTagName('input');
    for(let i = 0; i < forms.length; i++) {
        forms[i].readOnly = false;
    }

    //update button text
    document.getElementById('edit-btn').innerText = "Submit";

    //show file select & clear
    document.getElementById('image-uploader').style.display="inline-block";
    document.getElementById('clear-btn').style.display='inline-block';
    document.getElementById('clear-btn').style.float='right';
}

//submit edits
const submitEdits = function() {
    //loop through each form and save their text, make the forms readonly again
    let forms = document.querySelectorAll('input');
    for(let i = 0; i < forms.length; i++) {
        //saveEdits();  //implemented later
        forms[i].readOnly = true;
    }

    //update button inner text
    document.getElementById('edit-btn').innerText = "Edit";

    changeImage();

    //hide file selector & clear
    document.getElementById('image-uploader').style.display="none";
    document.getElementById('clear-btn').style.display='none';
}

//change image
const changeImage = function() {
    let src = document.getElementById('image-uploader').value;
    if(src != ''){ 
        imageSource = src;
    }
    console.log(imageSource);
    clearSelection();
}

//clearselection
const clearSelection = function() {
    document.getElementById('image-uploader').value = '';
}

//print animals
const printAnimals = function() {

}

initializePage();