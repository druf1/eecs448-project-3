const info = [
    "Litter Name:",
    "Animal Name:",
    "Birth Date:",
    "Intake Date:",
    "Adoption Date:",
    "Adopter Name:"
];

const initializeInfo = function () {
    let labels = document.getElementById('info-div').getElementsByTagName('label');
    let forms = document.getElementById('info-div').getElementsByTagName('input');
    for(let i = 0; i < labels.length; i++) {
        labels[i].innerText = info[i];
        forms[i].value = info[i].toString().slice(0,-1);
        forms[i].readOnly = true;
    }

    //show description
    document.getElementById('description-header').style.display = 'block';
    document.getElementById('description').style.display = 'block';
}

const editButtonHandler = function () {
    if(document.getElementById('edit-btn').innerText == "Edit") editAnimalInfo();
    else submitEdits();
}

const editAnimalInfo = function() {
    //loop through each form allow them to be editable
    let forms = document.getElementsByTagName('input');
    for(let i = 0; i < forms.length; i++) {
        forms[i].readOnly = false;
    }

    //get text area and description
    let textarea = document.getElementById('description-box');
    let description = document.getElementById('description');
    
    //update textarea text
    textarea.value = description.innerText;

    //hide description paragraph and show textarea
    description.style.display = 'none';
    textarea.style.display = 'block';
    textarea.setAttribute('rows',12);

    //update button text
    document.getElementById('edit-btn').innerText = "Submit";
}

const submitEdits = function() {
    //loop through each form and save their text, make the forms readonly again
    let forms = document.querySelectorAll('input');
    for(let i = 0; i < forms.length; i++) {
        //saveEdits();  //implemented later
        forms[i].readOnly = true;
    }

    //get textarea and description
    let textarea = document.getElementById('description-box');
    let description = document.getElementById('description');

    //update description text
    description.innerText = textarea.value;

    //hide textarea and show description
    textarea.style.display = 'none';
    description.style.display = 'block';

    //update button inner text
    document.getElementById('edit-btn').innerText = "Edit";
}

initializeInfo();